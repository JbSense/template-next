import { api } from './api';

export const isAdmin = async () => {
  const { data } = await api.get('isAdmin');

  return data;
};
