import styles from './Header.module.css';
import logo from '../../images/account_logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={logo}
        alt="Логотип"
      />
      <p className={styles.title}>Тестовое задание Дунаева Андрея</p>
    </header>
  );
};

export default Header;
