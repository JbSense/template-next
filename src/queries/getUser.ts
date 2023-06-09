import { prismaCLient } from 'services/prismaClient';

const byId = async (id: string) => {
  const user = await prismaCLient.user.findUnique({
    where: {
      id
    }
  });

  return user;
};

const byEmail = async (email: string) => {
  const user = await prismaCLient.user.findUnique({
    where: {
      email
    }
  });

  return user;
};

export const getUser = {
  byId,
  byEmail
};
