import jwt from 'jsonwebtoken';
import { EncryptData } from 'types/encryptData';

export const encrypt = (data: EncryptData) => {
  const token = jwt.sign({ data }, process.env.PRIVATE_KEY || '', {
    expiresIn: 60 * 60 * 24 // 24 horas
  });

  return token;
};
