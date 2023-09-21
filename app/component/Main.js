import Link from 'next/link'
import styles from './component.module.css';

export default function Main() {

  const name = '박서율';
  const date = '9월 30일';

  return (
    <>
    <div className={styles.main}>
      <div className={styles.mainWrap}>
        <div className={styles.mainTitle}>
          <span>{name}님이</span>
          <span>선물을 보냈어요!</span>
          <p className={styles.mainSubTitle}>{date} 오후 8시까지 확인해주세요</p>
        </div>
        <div className={styles.mainImgWrap}>
          <img src="/img/main-background.png" className={styles.mainImg}/>
        </div>
        <div className={styles.mainButtonWrap}>
          <Link href={'/login'}>
            <button className={styles.mainButton}>지금 확인하기</button>
          </Link>
        </div>
        <div className={styles.footer}>
          <p className={styles.footerContent}>개인정보 수집이용</p>
          <p className={styles.footerContent}>토스 모의투자에 개인정보를 이용합니다</p>
        </div>
      </div>
    </div>
    </>
  )
}