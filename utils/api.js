import prismaClient from "../prisma/prismaClient";

export const findOrCreateUser = async function (sessionUser) {
  const data = {
    email: sessionUser.email,
    firstName: sessionUser.given_name,
    lastName: sessionUser.family_name,
    profilePicture: sessionUser.picture,
  };
  return await prismaClient.user.upsert({
    where: { email: sessionUser.email },
    update: data,
    create: data,
  });
};
