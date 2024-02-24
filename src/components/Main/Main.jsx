import styles from './Main.module.css';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import SearchInput from '../SearchInput/SearchInput';
import { getIds, getItems, getFilteredProducts } from '../../utils/api';
import checkRepeatIds from '../../helpers/checkRepeatIds';
import { useState } from 'react';
import { useEffect } from 'react';
import { PAGINATION_LIMIT, STOCK } from '../../variables/variables';

const Main = () => {
  const [ids, setIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getIds().then((res) => {
      if (res) setIds([...new Set(res.result)]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const partOfIds = ids.slice(offset, offset + PAGINATION_LIMIT);
    getItems(partOfIds).then((res) => {
      if (res) {
        const items = checkRepeatIds(res.result);
        setProducts(items);
      }
    });
  }, [offset, ids]);

  useEffect(() => {
    console.log('filter');
    if (filter !== '') {
      getFilteredProducts('product', filter).then((res) => {
        if (res) setIds([...new Set(res.result)]);
      });
    }
  }, [filter]);

  const increaseOffset = () => {
    setOffset(offset + PAGINATION_LIMIT);
  };

  const decreaseOffset = () => {
    setOffset(offset - PAGINATION_LIMIT);
  };

  return (
    <main className={styles.main}>
      {loading && <Loader />}
      <SearchInput filter={setFilter} />
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
            offset >= ids.length - 50 && styles.button_disabled
          }`}
        ></button>
      </div>
    </main>
  );
};

export default Main;
