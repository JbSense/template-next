import { prismaCLient } from 'services/prismaClient';

const byId = async (id: string) => {
  const user = await prismaCLient.user.findUnique({
    where: {
      id
    }
  });

  return user;
};

const byUser = async (id: string) => {
  const user = await prismaCLient.user.findUnique({
    where: {
      id
    },
    select: {
      employee: {
        select: {
          name: true,
          position: true
        }
      }
    }
  });

  return user?.employee;
};

export const getEmployee = {
  byId,
  byUser
};
