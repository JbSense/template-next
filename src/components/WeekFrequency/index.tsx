import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SecondaryButton from 'components/UI/SecondaryButton';
import styles from './index.module.css';

export default function WeekFrequency() {
  const pathName = usePathname();

  const currentDate = new Date();
  const today = new Date();

  const sunday = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay())
  );

  const weekDays = [
    {
      weekDay: 'Dom',
      day: new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay())
      )
    },
    {
      weekDay: 'Seg',
      day: new Date(currentDate.setDate(sunday.getDate() + 1))
    },
    {
      weekDay: 'Ter',
      day: new Date(currentDate.setDate(sunday.getDate() + 2))
    },
    {
      weekDay: 'Qua',
      day: new Date(currentDate.setDate(sunday.getDate() + 3))
    },
    {
      weekDay: 'Qui',
      day: new Date(currentDate.setDate(sunday.getDate() + 4))
    },
    {
      weekDay: 'Sex',
      day: new Date(currentDate.setDate(sunday.getDate() + 5))
    },
    {
      weekDay: 'Sab',
      day: new Date(currentDate.setDate(sunday.getDate() + 6))
    }
  ];

  return (
    <div className={styles['Week-frequency']}>
      <p className={styles['Week-frequency__title']}>Frequências</p>

      <div className={styles['Week-frequency__days']}>
        {weekDays?.map((item) => {
          return (
            <div
              className={`${styles['Week-frequency__day']} ${
                styles[item.day.getDate() === today.getDate() ? 'selected' : '']
              }`}
              key={item.day.getDate()}
            >
              <div className={styles['Week-frequency__day-items']}>
                <p>{item.weekDay}</p>
                <p>{item.day.getDate()}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Link href={`${pathName}/frequencias`}>
        <SecondaryButton text="Histórico" width="auto" />
      </Link>
    </div>
  );
}
