'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) push('/');
  }, [isAuthenticated, push]);

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  );
};

export default PrivateRoute;
