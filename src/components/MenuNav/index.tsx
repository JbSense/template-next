import { ReactNode } from 'react';
import styles from './index.module.css';

export default function MenuNav({ children }: { children: ReactNode }) {
  return <nav className={styles['Menu-nav']}>{children}</nav>;
}
