import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contacts}>
        <li className={styles.contacts_list_item}>
          <a
            target="blanc"
            className={styles.contacts_item}
            href="https://t.me/andrew_dunaev"
          >
            Telegram: @Andrew_Dunaev
          </a>
        </li>
        <li className={styles.contacts_list_item}>
          <a
            target="blanc"
            className={styles.contacts_item}
            href="mailto:dunayev@yandex.ru"
          >
            email: dunayev@yandex.ru
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
