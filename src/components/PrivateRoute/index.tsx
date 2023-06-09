'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { isAuthenticated } from 'utils/isAuthenticated';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const isUserAuthenticated = isAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) push('/auth/signIn');
  }, [isUserAuthenticated, push]);

  return (
    <>
      {!isUserAuthenticated && null}
      {isUserAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
