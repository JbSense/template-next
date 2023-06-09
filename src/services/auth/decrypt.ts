import jwt from 'jsonwebtoken';
import { TokenDataType } from 'types/tokenData';

type DecryptDataType = {
  data: TokenDataType;
};

export const decrypt = (token: string) => {
  try {
    const decode = jwt.verify(
      token,
      process.env.PRIVATE_KEY || ''
    ) as DecryptDataType;

    return decode.data;
  } catch (error) {
    return false;
  }
};
