import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './index.module.css';
import { useDate } from 'hooks/useDate';
import { useTheme } from 'hooks/useTheme';
import { soraFont } from 'utils/fonts';

type DateFieldType = {
  date?: string;
  register: UseFormRegister<FieldValues>;
};

export default function DateField({ date, register }: DateFieldType) {
  const { theme } = useTheme();
  const { separateDate } = useDate();
  const { day, month, year } = separateDate(date ?? '');

  return (
    <div className={`${styles['Date-field']} ${styles[theme]}`}>
      <input
        type="number"
        id="day"
        placeholder="DD"
        defaultValue={day}
        className={`${soraFont.className}`}
        {...register('day')}
      />

      <span className={styles['Date-field__separator']}></span>

      <input
        type="number"
        id="month"
        placeholder="MM"
        defaultValue={month}
        className={`${soraFont.className}`}
        {...register('month')}
      />

      <span className={styles['Date-field__separator']}></span>

      <input
        type="number"
        id="year"
        placeholder="AAAA"
        defaultValue={year}
        className={`${soraFont.className}`}
        {...register('year')}
      />
    </div>
  );
}
