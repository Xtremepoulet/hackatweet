import styles from '../styles/Home.module.css';
import Login from './Login';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Login ></Login>
        </h1>
      </main>
    </div>
  );
}

export default Home;
