'use client';

import styles from './index.module.css';
import { useStage } from 'hooks/useStage';
import { useTheme } from 'hooks/useTheme';

export default function CurrentStage() {
  const { currentStage } = useStage();
  const { theme } = useTheme();

  return (
    <p className={`${styles['Current-stage']} ${styles[theme]}`}>
      {currentStage !== null ? currentStage?.nomenclature : 'Escolha uma turma'}
    </p>
  );
}
