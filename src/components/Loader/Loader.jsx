import styles from './Loader.module.css';
import loader from '../../images/loader.gif';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img
        src={loader}
        alt="лоадер"
        className={styles.image}
      />
      <p className={styles.message}>Идет загрузка ...</p>
    </div>
  );
};
export default Loader;
