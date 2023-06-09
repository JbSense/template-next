import { encrypt } from './encrypt';
import { prismaCLient } from 'services/prismaClient';
import { SignInType } from 'types/signInType';

export const signIn = async (credentials: SignInType) => {
  const { email, password } = credentials;

  const user = await prismaCLient.user.findUnique({
    where: {
      email
    },
    select: {
      id: true,
      level: true,
      password: true,
      employee: {
        select: {
          id: true,
          position: true,
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

  if (user === null) return false;

  if (password !== user.password) return false;

  return encrypt({
    user: {
      id: user.id,
      level: user.level
    },
    employee: {
      id: user.employee.id,
      position: user.employee.position
    },
    school: {
      id: user.employee.school.id,
      name: user.employee.school.name
    }
  });
};
