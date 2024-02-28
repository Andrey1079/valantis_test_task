import { useEffect, useMemo, useState } from 'react';
import styles from './ChooseCategory.module.css';

const ChooseCategory = ({ setCategory, category }) => {
  const defaultInputs = useMemo(
    () => [
      { name: 'Наименование товара', category: 'product', isActive: false },
      { name: 'Бренд', category: 'brand', isActive: false },
      { name: 'Цена', category: 'price', isActive: false },
    ],
    []
  );
  const [inputs, setInputs] = useState(defaultInputs);

  useEffect(() => {
    if (category.length < 1) {
      setInputs(
        defaultInputs.map((input) => {
          input.isActive = false;
          return input;
        })
      );
    }
  }, [category, defaultInputs]);
  const handleChange = (e) => {
    const value = e.target.value;
    setInputs(
      inputs.map((input) => {
        input.isActive = input.category === value;
        return input;
      })
    );
    setCategory(value);
  };
  return (
    <div className={styles.category}>
      {inputs.map((input, index) => (
        <div
          key={index}
          className={`${styles.input_container} ${
            input.isActive && styles.input_container_choosen
          }`}
        >
          <input
            className={styles.input}
            type="radio"
            id={input.category}
            value={input.category}
            name="category"
            onChange={handleChange}
            checked={input.isActive}
          />

          <label
            className={`${styles.label}   ${
              input.isActive && styles.label_choosen
            }`}
            htmlFor={input.category}
          >
            {input.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ChooseCategory;
