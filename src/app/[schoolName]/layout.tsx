'use client';

import { ReactNode } from 'react';
import SideBarNav from 'components/Layout/SideBarNav';
import Justification from 'components/Modals/Justification';
import styles from './layout.module.css';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from 'hooks/useTheme';
import { queryClient } from 'services/queryClient';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const { data: justificationModal } = useQuery({
    queryKey: ['justificationModal'],
    queryFn: (): boolean => {
      const result = queryClient.getQueryData([
        'justificationModal'
      ]) as boolean;

      if (result === undefined) return false;
      return result;
    }
  });

  // const justificationModal = queryClient.getQueryData([
  //   'justificationModal'
  // ]) as boolean;

  return (
    <div className={`${styles['Dashboard-layout']} ${styles[theme]}`}>
      <SideBarNav />

      <main className={styles['Dashboard-layout__content']}>
        {justificationModal && <Justification />}

        {children}
      </main>
    </div>
  );
}
