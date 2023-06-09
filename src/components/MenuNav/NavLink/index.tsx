import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import styles from './index.module.css';

type NavLinkPropsType = {
  path: string;
  icon: ReactNode;
  text: string;
};

export default function NavLink({ path, icon, text }: NavLinkPropsType) {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`${styles['Nav-link']} ${
        pathName === path ? styles['selected'] : ''
      }`}
    >
      {icon && icon}
      <p>{text}</p>
    </Link>
  );
}
