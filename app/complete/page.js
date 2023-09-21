import styles from './page.module.css';
import Header from '../component/Header';
import { BsArrowRightShort } from "react-icons/bs";

export default function Complete() {
  return (
    <>
    <div className={styles.container}>
      <Header />
      <div className={styles.checkContainer}>
        <div className={styles.checkWrap}>
          <img className={styles.checkImg} src='/img/checkmark.png'/>
          <span>완료되었습니다</span>
        </div>
        <div className={styles.boxWrap}>
          <a 
          target='_blank' 
          href={`https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328`} 
          rel='noreferrer' 
          className={styles.linkBox}>
            <span>토스로 이동하기</span>
            <BsArrowRightShort className={styles.arrow}/>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}