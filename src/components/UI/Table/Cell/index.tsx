import { ReactNode } from 'react';
import styles from './index.module.css';

export default function Cell({ children }: { children: ReactNode }) {
  return <td className={styles.index}>{children}</td>;
}
