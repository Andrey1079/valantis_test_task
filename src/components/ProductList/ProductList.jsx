import styles from './ProductList.module.css';
import Card from '../Card/Card';
import SearchSection from '../SearchSection/SearchSection';
import { PAGINATION_LIMIT } from '../../variables/variables';

const ProductList = ({
  dataLength,
  setCategory,
  category,
  setFilter,
  products,
  setOffset,
  offset,
}) => {
  const increaseOffset = () => {
    setOffset(offset + PAGINATION_LIMIT);
  };

  const decreaseOffset = () => {
    setOffset(offset - PAGINATION_LIMIT);
  };

  return (
    <section className={styles.product_list}>
      <SearchSection
        setCategory={setCategory}
        category={category}
        setFilter={setFilter}
      />

      <ul className={styles.cards_container}>
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              data={product}
            />
          );
        })}
      </ul>

      <div className={styles.pages}>
        <button
          onClick={decreaseOffset}
          className={`${styles.button_left} ${styles.button} ${
            offset < 1 && styles.button_disabled
          }`}
        ></button>
        <p className={styles.page_number}>{offset}</p>
        <button
          onClick={increaseOffset}
          className={`${styles.button} ${
            offset >= dataLength - 50 && styles.button_disabled
          }`}
        ></button>
      </div>
    </section>
  );
};

export default ProductList;
