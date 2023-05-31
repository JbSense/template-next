'use client';

import { SignInType } from 'types/signInType';
import { api } from 'utils/api';

export const useAuth = () => {
  const login = async (credentials: SignInType) => {
    const response = await api
      .post('auth/signIn', credentials)
      .then((response) => response);

    return response.data;
  };

  return {
    login
  };
};
