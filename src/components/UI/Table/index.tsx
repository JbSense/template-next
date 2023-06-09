import { ReactNode } from 'react';
import styles from './index.module.css';

export default function Table({ children }: { children: ReactNode }) {
  return (
    <table className={styles['Table']}>
      <tbody>
        <tr className={styles['Table__head']}>
          <th>Nome</th>
          <th>Ações</th>
        </tr>

        {children}
      </tbody>
    </table>
  );
}
