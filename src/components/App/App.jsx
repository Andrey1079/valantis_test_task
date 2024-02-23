import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
function App() {
  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
