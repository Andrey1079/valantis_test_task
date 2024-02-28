import { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ setFilter, category, setCategory, filter }) => {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleFilter = (e) => {
    e.preventDefault();
    const value = inputValue;
    setFilter(value);
  };
  const resetFilter = () => {
    setFilter('');
    setCategory('');
    setInputValue('');
  };

  return (
    <form className={styles.search_container}>
      <input
        placeholder="введите поисковый запрос"
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleOnChange}
      />

      {filter && (
        <button
          className={`${styles.search_button_reset} ${styles.search_button}`}
          type="button"
          onClick={resetFilter}
        ></button>
      )}
      <button
        type="submit"
        onClick={handleFilter}
        className={`${
          !(category && inputValue) && styles.search_button_disabled
        } ${styles.search_button}`}
      ></button>
    </form>
  );
};

export default SearchInput;
