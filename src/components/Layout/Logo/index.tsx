'use client';

import styles from './index.module.css';
import { useTheme } from 'hooks/useTheme';

export default function Logo() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.Logo} ${styles[theme]}`}>
      <p className={styles['Logo__name']}>
        Easy <span>Web</span>
      </p>
    </div>
  );
}
