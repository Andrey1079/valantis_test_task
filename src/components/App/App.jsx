import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
