'use client';

import { usePathname } from 'next/navigation';
import Logo from 'components/Layout/Logo';
import Main from 'components/Layout/Main';
import PrivateRoute from 'components/PrivateRoute';
import StyleTheme from 'components/StyleTheme';
import { soraFont } from 'utils/fonts';
import { isPublicRoute } from 'utils/isPublicRoute';
import Providers from 'utils/providers';
import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isPublicPage = isPublicRoute(pathName);

  return (
    <html lang="pt-BR">
      <body className={`${soraFont.className}`}>
        <Providers>
          {/* <Logo /> */}
          <Main>
            {isPublicPage && children}
            {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
          </Main>
          <StyleTheme />
        </Providers>
      </body>
    </html>
  );
}
