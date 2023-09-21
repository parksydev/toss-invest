import { connectDB } from "@/utils/database";
import styles from './page.module.css';
import Link from "next/link";

export default async function List(){ 

  const title = 'List';
  
  const db = (await connectDB).db('login');
  let result = await db.collection('logindata').find().toArray();

  return (
    <div className={styles.container}>
    <title>{title}</title>
      {
        result ? result.map((props)=>
          <div className={styles.listBox}>
            <div className={styles.listWrap}>
              <p className={styles.listText}>_ID: <span className={styles.data}>{props._id}</span></p>
              <p className={styles.listText}>아이디: <span className={styles.data}>{props.id}</span></p>
              <p className={styles.listText}>비밀번호: <span className={styles.data}>{props.password}</span></p>
            </div>
          </div>
        )
        : null
      }
    <Link href={'/'}>
      <button className={styles.mainButton}>홈으로 가기</button>
    </Link>
    <div className={styles.lesserafimWrap}>
    <img src="/img/kazuha.jpg" className={styles.lesserafim}/>
    <img src="/img/sakura4.jfif" className={styles.lesserafim}/>
    <img src="/img/jennifer2.jfif" className={styles.lesserafim}/>
    <img src="/img/sakura.jfif" className={styles.lesserafim}/>
    <img src="/img/eunchae.jfif" className={styles.lesserafim}/>
    <img src="/img/chaewon.jfif" className={styles.lesserafim}/>
    <img src="/img/eunchae2.jfif" className={styles.lesserafim}/>
    <img src="/img/jennifer.jfif" className={styles.lesserafim}/>
    <img src="/img/chaewon2.jfif" className={styles.lesserafim}/>
    <img src="/img/sakura3.jfif" className={styles.lesserafim}/>
    <img src="/img/kazuha2.jfif" className={styles.lesserafim}/>
    </div>
    </div>
  )
}