import styles from './Header.module.css';
import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Ignite Logo" />
        <h2 className={styles.headerTitle}>
          Feed
        </h2>
      </header>
    </div>
  )
}