'use client';

import ListStudents from 'components/ListStudents';
import WeekFrequency from 'components/WeekFrequency';
import styles from './page.module.css';

export default function Turmas() {
  return (
    <div className={styles.Turmas}>
      <WeekFrequency />

      <div className={styles['Turmas__students']}>
        <ListStudents />
      </div>
    </div>
  );
}
