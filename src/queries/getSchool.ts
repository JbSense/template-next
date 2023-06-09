import { prismaCLient } from 'services/prismaClient';

const byUser = async (user: string) => {
  const school = await prismaCLient.user.findUnique({
    where: {
      id: user
    },
    select: {
      employee: {
        select: {
          school: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  });

  if (school === null) return null;

  return school.employee.school;
};

export const getSchool = {
  byUser
};
