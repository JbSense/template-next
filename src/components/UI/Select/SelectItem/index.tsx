import styles from './index.module.css';

type SelectItemPropsType = {
  id?: string;
  text: string;
  onCLick: () => void;
};

export default function SelectItem({ text, onCLick }: SelectItemPropsType) {
  return (
    <div className={styles['Select-item']} onClick={() => onCLick()}>
      <p>{text}</p>
    </div>
  );
}
