import styles from './page.module.css';
import Link from 'next/link';
import Header from './component/Header';
import Main from './component/Main';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
    </div>
  )
}