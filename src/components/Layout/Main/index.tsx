'use client';

import React, { ReactNode } from 'react';
import styles from './index.module.css';
import { useTheme } from 'hooks/useTheme';

export default function Main({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return <div className={`${styles['Main']} ${styles[theme]}`}>{children}</div>;
}
