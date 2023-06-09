import styles from './index.module.css';
import { useAuth } from 'hooks/useAuth';

export default async function AddStageButton() {
  const { isAdmin } = useAuth();

  const admin = await isAdmin();

  if (admin) {
    return (
      <div className={styles.index}>
        <p>index</p>
      </div>
    );
  }
}
