import { ReactNode } from 'react';
import styles from './index.module.css';

export default function BackgroundBlur({ children }: { children: ReactNode }) {
  return <div className={styles['Background-blur']}>{children}</div>;
}
