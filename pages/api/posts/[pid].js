import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { prisma } from "@prisma/client";
import prismaClient from "../../../prisma/prismaClient";

export default withApiAuthRequired(async function handler(req, res) {
  try {
    const pid = parseInt(req.query.pid);
    if (req.method === "GET") {
      const post = await prismaClient.post.update({
        where: { id: pid },
        data: {
          views: {
            increment: 1,
          },
        },
      });
      res.status(200).json(post);
    } else if (req.method === "DELETE") {
      const deleted = await prismaClient.post.delete({
        where: {
          id: pid,
        },
      });
      res.status(200);
    }

    res.send();
  } catch (error) {
    res.send(500);
  }
});
