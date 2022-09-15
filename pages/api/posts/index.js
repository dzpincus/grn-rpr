import { PrismaClient } from "@prisma/client";
import sanitizeHtml from "sanitize-html";

const prisma = new PrismaClient();

// pages/api/courses.js

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

module.exports = withApiAuthRequired(async (req, res) => {
  if (req.method === "POST") {
    const response = await createPost(req, res);
    return response.send();
  }
  // validate user can view courses

  res.send();
});

const createPost = async function (req, res) {
  const body = req.body;
  const { user } = getSession(req, res);
  try {
    const newPost = await prisma.post.create({
      data: {
        authorEmail: user.email,
        title: body.title,
        content: sanitizeHtml(body.content),
      },
    });
    return res.status(200);
  } catch (error) {
    return res.status(500).json({ error: "Error saving post" });
  }
};
