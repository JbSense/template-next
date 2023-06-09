import Link from 'next/link';
import styles from './index.module.css';

type ListItemPropsType = {
  path: string;
  icon?: any;
  text: string;
  selected?: boolean;
};

export default function ListItem({
  path,
  icon,
  text,
  selected
}: ListItemPropsType) {
  return (
    <Link
      href={path}
      className={`${styles['List-item']} ${selected && styles['selected']}`}
    >
      {/* <Image src={icon} alt="Icon" /> */}
      {icon && icon}
      <p>{text}</p>
    </Link>
  );
}
