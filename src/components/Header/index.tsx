import { ReactNode } from 'react';
import styles from './index.module.css';

export default function HeaderTurmas({ children }: { children: ReactNode }) {
  return <div className={styles.Header}>{children}</div>;
}
