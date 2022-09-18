import { PrismaClient } from "@prisma/client";
import sanitizeHtml from "sanitize-html";

const prisma = new PrismaClient();

// pages/api/courses.js

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

module.exports = withApiAuthRequired(async (req, res) => {
  if (req.method === "POST") {
    return await createPost(req, res);
  } else if (req.method === "GET") {
    const data = await prisma.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        author: true,
      },
    });
    res.status(200).json(data);
  }

  res.send();
});

const createPost = async function (req, res) {
  try {
    const body = req.body;
    const { user: sessionUser } = getSession(req, res);
    const user = await findOrCreateUser(sessionUser);
    const newPost = await prisma.post.create({
      data: {
        authorId: user.id,
        title: body.title,
        content: sanitizeHtml(body.content),
      },
      include: {
        author: true,
      },
    });
    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json({ error: "Error saving post" });
  }
};

const findOrCreateUser = async function (sessionUser) {
  const data = {
    email: sessionUser.email,
    firstName: sessionUser.given_name,
    lastName: sessionUser.family_name,
    profilePicture: sessionUser.picture,
  };
  return await prisma.user.upsert({
    where: { email: sessionUser.email },
    update: data,
    create: data,
  });
};
