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
      password: true
    }
  });

  if (user === null) return false;

  if (password !== user.password) return false;

  return encrypt({
    id: user.id,
    level: user.level
  });
};
