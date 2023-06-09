import { IoLogOut } from 'react-icons/io5';
import styles from './index.module.css';
import { useAuth } from 'hooks/useAuth';

export default function Logout() {
  const { logout } = useAuth();

  return (
    <div className={styles.Logout} onClick={() => logout()}>
      <IoLogOut size={30} />
      <p>Sair</p>
    </div>
  );
}
