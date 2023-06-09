'use client';

import { MdNavigateNext } from 'react-icons/md';
import styles from './index.module.css';
import { useDate } from 'hooks/useDate';

export default function Date() {
  const { dateFormated, changeDay } = useDate();

  return (
    <div className={styles.Date}>
      <div
        className={`${styles['Date__back']} ${styles['Date__button']}`}
        onClick={() => changeDay('back')}
      >
        <MdNavigateNext size={25} color="fff" />
      </div>

      <p>{dateFormated}</p>

      <div
        className={`${styles['Date__next']} ${styles['Date__button']}`}
        onClick={() => changeDay('next')}
      >
        <MdNavigateNext size={25} color="fff" />
      </div>
    </div>
  );
}
