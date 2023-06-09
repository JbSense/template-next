import styles from './index.module.css';

type InvalidFieldProps = {
  text: string;
};

export default function InvalidField({ text }: InvalidFieldProps) {
  return <p className={styles['Invalid-field']}>{text}</p>;
}
