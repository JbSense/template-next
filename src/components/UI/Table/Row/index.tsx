import { ReactNode } from 'react';
import styles from './index.module.css';

export default function Row({ children }: { children: ReactNode }) {
  return <tr className={styles.Row}>{children}</tr>;
}
