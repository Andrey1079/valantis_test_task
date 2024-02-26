import styles from './SearchSection.module.css';
import SearchInput from './SearchInput/SearchInput';
import ChooseCategory from './ChooseCategory/ChooseCategory';

const SearchSection = ({ setCategory, category, setFilter }) => {
  return (
    <div className="search_section">
      <h3 className={styles.title}>Параметры фильтрации</h3>
      <ChooseCategory setCategory={setCategory} />
      <SearchInput
        setFilter={setFilter}
        category={category}
      />
    </div>
  );
};

export default SearchSection;
