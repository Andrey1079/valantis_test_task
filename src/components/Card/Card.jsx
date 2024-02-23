import styles from './Card.module.css';
const data = {
  brand: null,
  id: '2b7c7643-6852-4562-8a72-7666c72b3518',
  price: 12500,
  product: 'Золотое кольцо с топазом и бриллиантами',
};
const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{data.product}</h3>
      <p className={styles.brand}>{`Бренд: ${
        data.brand ? data.brand : '-'
      }`}</p>
      <p className={styles.price}>{`Цена: ${data.price} руб.`}</p>
    </div>
  );
};

export default Card;
