import styles from './Main.module.css';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import SearchInput from '../SearchInput/SearchInput';
import ChooseCategory from '../ChooseCategory/ChooseCategory';
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
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (filter === '') {
      setIsLoading(true);
      getIds()
        .then((res) => {
          if (res) setIds([...new Set(res.result)]);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [filter]);

  useEffect(() => {
    setIsLoading(true);
    const partOfIds = ids.slice(offset, offset + PAGINATION_LIMIT);
    getItems(partOfIds)
      .then((res) => {
        if (res) {
          const items = checkRepeatIds(res.result);
          setProducts(items);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [offset, ids]);

  useEffect(() => {
    if (filter !== '') {
      setIsLoading(true);
      setOffset(0);
      getFilteredProducts(category, filter)
        .then((res) => {
          if (res) setIds([...new Set(res.result)]);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }, [filter, category]);

  const increaseOffset = () => {
    setOffset(offset + PAGINATION_LIMIT);
  };

  const decreaseOffset = () => {
    setOffset(offset - PAGINATION_LIMIT);
  };

  return (
    <main className={styles.main}>
      {loading && <Loader />}
      <ChooseCategory onChange={setCategory} />
      <SearchInput
        category={category}
        filter={setFilter}
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
            offset >= ids.length - 50 && styles.button_disabled
          }`}
        ></button>
      </div>
    </main>
  );
};

export default Main;
