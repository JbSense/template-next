'use client';

import { WiMoonFirstQuarter } from 'react-icons/wi';
import styles from './index.module.css';
import { useTheme } from 'hooks/useTheme';

export default function StyleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`${styles['Style-theme']} ${styles[theme]}`}
      onClick={() => setTheme(theme === 'theme-light' ? 'dark' : 'light')}
    >
      <WiMoonFirstQuarter
        size={20}
        color={theme === 'theme-light' ? '#fff' : '#0A0A0A'}
      />
    </div>
  );
}
