import { IoCloseSharp } from 'react-icons/io5';
import styles from './index.module.css';
import { useModal } from 'hooks/useModal';

export default function CloseButton() {
  const { close } = useModal();

  return (
    <div className={styles['Close-button']} onClick={close}>
      <IoCloseSharp size={20} color="#fff" />
    </div>
  );
}
