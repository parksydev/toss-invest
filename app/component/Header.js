import styles from './component.module.css';
import Link from 'next/link'
import Hamburger from './Hamburger';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerWrap}>
          <div className={styles.logoWrap}>
            <Link href={'/'}>
              <img src={'/img/toss-invest-logo.png'} className={styles.logoImg} alt='logo'/>
            </Link>
          </div>
          <div className={styles.hamburgerWrap}>
            <Hamburger />
          </div>
        </div>
      </div>
    </>
  )
}