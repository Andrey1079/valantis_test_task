import styles from './SearchSection.module.css';
import SearchInput from './SearchInput/SearchInput';
import ChooseCategory from './ChooseCategory/ChooseCategory';
import { memo } from 'react';

const SearchSection = ({ setCategory, category, setFilter, filter }) => {
  return (
    <div className={styles.search_section}>
      <ChooseCategory
        setCategory={setCategory}
        category={category}
      />
      <SearchInput
        setCategory={setCategory}
        setFilter={setFilter}
        category={category}
        filter={filter}
      />
    </div>
  );
};

export default memo(SearchSection);
