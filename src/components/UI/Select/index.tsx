'use client';

import { ReactNode, useState } from 'react';
import styles from './index.module.css';
import { useTheme } from 'hooks/useTheme';

type SelectPropsType = {
  selected: string;
  children: ReactNode;
};

export default function Select({ selected, children }: SelectPropsType) {
  const [isDown, setIsDown] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.Select} ${styles[theme]}`}
      onClick={() => setIsDown(!isDown)}
    >
      <p className={styles['Select__selected']}>{selected}</p>

      <div
        className={`${styles['Select__items']} ${
          styles[isDown ? 'Select__items-flex' : 'Select__items-none']
        }`}
      >
        {children}
      </div>
    </div>
  );
}
