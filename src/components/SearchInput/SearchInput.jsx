import { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ filter, field }) => {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    filter(value);
  };
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};

export default SearchInput;
