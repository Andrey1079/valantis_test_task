import { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ setFilter, category }) => {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleFilter = () => {
    const value = inputValue;
    setFilter(value);
  };
  return (
    <div className={styles.search_container}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button
        onClick={handleFilter}
        className={`${!category && styles.search_button_disabled} ${
          styles.search_button
        }`}
      ></button>
    </div>
  );
};

export default SearchInput;
