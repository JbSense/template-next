'use client';

import styles from './index.module.css';
import Justification from './Justification';
import { useModal } from 'hooks/useModal';

export default function Modals() {
  const { justificationModal } = useModal();
  console.log(justificationModal);
  return (
    <div className={styles.Modals}>
      {justificationModal && <Justification />}
    </div>
  );
}
