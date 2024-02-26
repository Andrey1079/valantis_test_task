import styles from './ChooseCategory.module.css';

const ChooseCategory = ({ setCategory }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className={styles.category}>
      <div className={styles.input_container}>
        <input
          type="radio"
          id="product"
          value="product"
          name="category"
          onChange={handleChange}
        />

        <label
          className={styles.label}
          htmlFor="product"
        >
          Наименование товара
        </label>
      </div>
      <div className={styles.input_container}>
        <input
          type="radio"
          id="brand"
          value="brand"
          name="category"
          onChange={handleChange}
        />
        <label
          className={styles.label}
          htmlFor="brand"
        >
          Бренд
        </label>
      </div>
      <div className={styles.input_container}>
        <input
          type="radio"
          id="price"
          value="price"
          name="category"
          onChange={handleChange}
        />
        <label
          className={styles.label}
          htmlFor="price"
        >
          Цена
        </label>
      </div>
    </div>
  );
};

export default ChooseCategory;
