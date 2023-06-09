'use client';

import Link from 'next/link';
import { IoPersonSharp } from 'react-icons/io5';
import styles from './index.module.css';
import { useSession } from 'hooks/useSession';

export default function Profile() {
  const { user } = useSession();

  return (
    <div className={styles.Profile}>
      <div className={styles['Profile__photo']}>
        <IoPersonSharp size={45} color="#0A0A0A" />
      </div>

      <p className={styles['Profile__name']}>{user?.name}</p>

      <Link href="#" className={styles['Profile__edit']}>
        Editar
      </Link>
    </div>
  );
}
