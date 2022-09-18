import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default withApiAuthRequired(async function handler(req, res) {
  try {
    const pid = parseInt(req.query.id);
    await prisma.post.update({
      where: { id: pid },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    res.send();
  } catch (error) {
    res.send(500);
  }
});
