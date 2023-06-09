'use client';

import { useRouter } from 'next/navigation';
import { SessionDataType } from 'types/sessionDataType';
import { SignInType } from 'types/signInType';
import { api } from 'utils/api';

export const useAuth = () => {
  const { push } = useRouter();

  const login = async (credentials: SignInType) => {
    return api.signIn(credentials);
  };

  const createSession = (sessionData: SessionDataType) => {
    localStorage.setItem('session', JSON.stringify(sessionData));
  };

  const logout = () => {
    localStorage.removeItem('session');
    return push('/auth/signIn');
  };

  return {
    login,
    createSession,
    logout
  };
};
