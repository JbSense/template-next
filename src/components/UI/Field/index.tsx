'use client';

import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './index.module.css';
import { useTheme } from 'hooks/useTheme';
import { soraFont } from 'utils/fonts';

type FieldType = {
  type: 'text' | 'email' | 'number' | 'password';
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
};

export default function Field({
  name,
  type,
  placeholder,
  register
}: FieldType) {
  const { theme } = useTheme();

  return (
    <div className={`${styles[theme]} ${styles.Field}`}>
      <input
        type={type}
        id={name}
        {...register(name)}
        className={`${styles['Field__input']} ${soraFont.className}`}
        required
      />
      <label htmlFor={name} className={styles['Field__label']}>
        {placeholder}
      </label>
    </div>
  );
}
