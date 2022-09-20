import sanitizeHtml from "sanitize-html";

import { findOrCreateUser } from "../../../utils/api";

import prismaClient from "../../../prisma/prismaClient";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

module.exports = withApiAuthRequired(async (req, res) => {
  try {
    if (req.method === "POST") {
      return await createPost(req, res);
    } else if (req.method === "GET") {
      const skip = req.query.skip ? parseInt(req.query.skip) : 0;
      const take = parseInt(req.query.take);
      const data = await prismaClient.post.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        skip: skip,
        take: take,
        include: {
          author: true,
          comments: {
            include: {
              author: true,
            },
            orderBy: [
              {
                createdAt: "desc",
              },
            ],
          },
        },
      });
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json(error);
  }

  res.send();
});

const createPost = async function (req, res) {
  try {
    const body = req.body;
    const { user: sessionUser } = getSession(req, res);
    const user = await findOrCreateUser(sessionUser);
    const newPost = await prismaClient.post.create({
      data: {
        authorId: user.id,
        title: body.title,
        content: sanitizeHtml(body.content),
      },
      include: {
        author: true,
        comments: true,
      },
    });
    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json({ error: "Error saving post" });
  }
};
