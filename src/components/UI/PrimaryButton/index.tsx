import styles from './index.module.css';
import { ButtonTypes } from 'types/buttonTypes';
import { soraFont } from 'utils/fonts';

export default function PrimaryButton({ text }: ButtonTypes) {
  return (
    <button className={`${styles['Primary-button']} ${soraFont.className}`}>
      {text}
    </button>
  );
}
