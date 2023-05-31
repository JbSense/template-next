import jwt from 'jsonwebtoken';

export const decrypt = (token: string) => {
  try {
    const decode = jwt.verify(token, process.env.PRIVATE_KEY || '');

    return decode;
  } catch (error) {
    return false;
  }
};
