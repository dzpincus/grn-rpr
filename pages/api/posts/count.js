import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import prismaClient from "../../../prisma/prismaClient";

module.exports = withApiAuthRequired(async (req, res) => {
  try {
    const count = await prismaClient.post.count();
    res.status(200).json(count).send();
  } catch (error) {
    res.status(500);
  } finally(() => {
    res.send()
  })
});
