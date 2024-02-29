import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import ProductList from '../ProductList/ProductList';
import { getIds, getItems, getFilteredIds } from '../../utils/api';
import checkRepeatIds from '../../helpers/checkRepeatIds';
import { PAGINATION_LIMIT } from '../../variables/variables';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [ids, setIds] = useState([]);
  const [filteredIds, setFilteredIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');

  const sliceItems = useCallback(
    (data) => {
      const partOfIds = data.slice(offset, offset + PAGINATION_LIMIT);
      return partOfIds;
    },
    [offset]
  );

  useEffect(() => {
    getIds()
      .then((res) => {
        if (res) {
          setIds([...new Set(res.result)]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // -------------------------------------------Запрос товаров из общего списка
  useEffect(() => {
    if (ids.length > 1 && filter.length < 1) {
      setIsLoading(true);
      const partOfIds = sliceItems(ids);
      getItems(partOfIds)
        .then((res) => {
          if (res) {
            const items = checkRepeatIds(res.result);
            setProducts(items);
            setIsLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [ids, sliceItems, filter]);

  // -------------------------------------------Запрос товаров из отфильтрованного списка
  useEffect(() => {
    if (filteredIds.length > 0) {
      setIsLoading(true);
      const partOfIds = sliceItems(filteredIds);
      getItems(partOfIds)
        .then((res) => {
          if (res) {
            const items = checkRepeatIds(res.result);
            setProducts(items);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [filteredIds, sliceItems]);

  // ---------------------------------------------Запрос id по фильтру
  useEffect(() => {
    if (filter.length > 0) {
      setIsLoading(true);
      setOffset(0);
      getFilteredIds(category, filter)
        .then((res) => {
          if (res && res.result.length > 0) {
            setFilteredIds([...new Set(res.result)]);
          } else {
            setProducts([]);
            setIsLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [filter, category]);

  return (
    <div className={styles.page}>
      {isLoading && <Loader />}
      <Header />
      <ProductList
        dataLength={filteredIds.length > 0 ? filteredIds.length : ids.length}
        setOffset={setOffset}
        offset={offset}
        setCategory={setCategory}
        category={category}
        setFilter={setFilter}
        products={products}
        filter={filter}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
