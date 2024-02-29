import styles from './ProductList.module.css';
import Card from '../Card/Card';
import { memo } from 'react';
import SearchSection from '../SearchSection/SearchSection';
import { PAGINATION_LIMIT } from '../../variables/variables';
import notFound from '../../images/404.jpg';

const ProductList = ({
  dataLength,
  setCategory,
  category,
  setFilter,
  products,
  setOffset,
  offset,
  filter,
  isLoading,
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
        filter={filter}
      />

      {products.length > 1 ? (
        <>
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
            <p className={styles.page_number}>
              {(offset + PAGINATION_LIMIT) / PAGINATION_LIMIT}
            </p>
            <button
              onClick={increaseOffset}
              className={`${styles.button} ${
                offset >= dataLength - 50 && styles.button_disabled
              }`}
            ></button>
          </div>
        </>
      ) : !isLoading ? (
        <div className={styles.not_found}>
          <p className={styles.not_found_title}>
            по вашему запросу ничего не нашлось
          </p>
          <img
            className={styles.not_found_image}
            src={notFound}
            alt="ничего не нашлось"
          />
        </div>
      ) : null}
    </section>
  );
};

export default memo(ProductList);
