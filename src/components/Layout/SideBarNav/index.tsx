'use client';

import Logout from 'components/Logout';
import MenuNav from 'components/MenuNav';
import NavLink from 'components/MenuNav/NavLink';
import Profile from 'components/Profile';
import { BsPeopleFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import { RiBookMarkFill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { session } from 'utils/session';
import Logo from '../Logo';
import styles from './index.module.css';

export default function SideBarNav() {
  const { schoolNameFormated } = session;

  return (
    <div className={styles['Side-bar-nav']}>
      <div className={styles['Side-bar-nav__logo']}>
        <Logo />
      </div>

      <Profile />

      <MenuNav>
        <NavLink
          path={`/${schoolNameFormated}`}
          icon={<RxDashboard size={25} />}
          text="Dashboard"
        />

        <NavLink
          path={`/${schoolNameFormated}/turmas`}
          icon={<IoMdSchool size={25} />}
          text="Turmas"
        />
      </MenuNav>

      <Logout />
    </div>
  );
}
