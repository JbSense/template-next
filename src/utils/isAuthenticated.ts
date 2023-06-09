export const isAuthenticated = () => {
  const sessionToken = localStorage.getItem('session');

  return !!sessionToken;
};
