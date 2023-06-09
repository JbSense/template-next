import jwt from 'jsonwebtoken';
import { TokenDataType } from 'types/tokenData';

export const encrypt = (data: TokenDataType) => {
  const token = jwt.sign({ data }, process.env.PRIVATE_KEY || '', {
    expiresIn: 60 * 60 * 24 // 24 horas
  });

  return token;
};
