import styles from './index.module.css';
import { ButtonType } from 'types/buttonType';
import { soraFont } from 'utils/fonts';

export default function PrimaryButton({ text, onClick }: ButtonType) {
  return (
    <button
      className={`${styles['Primary-button']} ${soraFont.className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
