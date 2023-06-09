import { APP_ROUTES } from 'constants/app-routes';

export const isPublicRoute = (currentPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);

  return appPublicRoutes.includes(currentPath);
};
