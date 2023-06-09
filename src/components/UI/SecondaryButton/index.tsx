import styles from './index.module.css';
import { ButtonType } from 'types/buttonType';
import { soraFont } from 'utils/fonts';

export default function SecondaryButton({ text, width }: ButtonType) {
  return (
    <button
      className={`${styles['Secondary-button']} ${soraFont.className} ${styles[width]}`}
    >
      {text}
    </button>
  );
}
