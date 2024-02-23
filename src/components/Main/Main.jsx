import styles from './Main.module.css';
import Card from '../Card/Card';
import { getIds, getItems } from '../../utils/api';
import checkRepeat from '../../utils/checkRepeat';
import { useState } from 'react';
import { useEffect } from 'react';

const Main = () => {
  const [ids, setIds] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getIds().then((res) => {
      if (res) setIds(res.result);
    });
  }, []);
  useEffect(() => {
    getItems(ids).then((res) => {
      if (res) setProducts(checkRepeat(res.result));
    });
  }, [ids]);
  return (
    <main className={styles.main}>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            data={product}
          />
        );
      })}
    </main>
  );
};

export default Main;
