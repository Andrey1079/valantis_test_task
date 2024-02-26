import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import ProductList from '../ProductList/ProductList';
import { getIds, getItems, getFilteredProducts } from '../../utils/api';
import checkRepeatIds from '../../helpers/checkRepeatIds';
import { PAGINATION_LIMIT } from '../../variables/variables';
import { useState, useEffect } from 'react';

function App() {
  const [ids, setIds] = useState([]);
  const [filteredIds, setFilteredIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (filter === '') {
      setIsLoading(true);
      getIds()
        .then((res) => {
          if (res) {
            setIds([...new Set(res.result)]);
            setIsLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [filter]);

  useEffect(() => {
    setIsLoading(true);
    if (filter === '') {
      const partOfIds = ids.slice(offset, offset + PAGINATION_LIMIT);
      getItems(partOfIds)
        .then((res) => {
          if (res) {
            const items = checkRepeatIds(res.result);
            setProducts(items);
            setIsLoading(false);
          }
        })
        .catch((err) => console.log(err));
    } else {
      const partOfIds = filteredIds.slice(offset, offset + PAGINATION_LIMIT);
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
  }, [offset, ids, filter, filteredIds]);

  useEffect(() => {
    if (filter !== '') {
      setIsLoading(true);
      setOffset(0);
      getFilteredProducts(category, filter)
        .then((res) => {
          if (res) {
            setFilteredIds([...new Set(res.result)]);
            setIsLoading(false);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setFilteredIds([]);
    }
  }, [filter]);

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
      />
      <Footer />
    </div>
  );
}

export default App;
