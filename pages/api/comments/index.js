import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import sanitizeHtml from "sanitize-html";

import prismaClient from "../../../prisma/prismaClient";
import { findOrCreateUser } from "../../../utils/api";

module.exports = withApiAuthRequired(async (req, res) => {
  if (req.method === "POST") {
    return await createComment(req, res);
  }
});

const createComment = async function (req, res) {
  try {
    const { user: sessionUser } = getSession(req, res);
    const user = await findOrCreateUser(sessionUser);
    const newComment = await prismaClient.comment.create({
      data: {
        authorId: user.id,
        content: req.body.content,
        postId: req.body.postId,
      },
      include: {
        author: true,
        comments: true,
      },
    });
    return res.status(200).json(newComment);
  } catch (error) {
    return res.status(500).json({ error: "Error saving comment" });
  }
};
