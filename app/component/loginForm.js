'use client';

import { useState } from 'react';
import styles from './loginform.module.css';

export default function LoginForm() {

    const [showPswd, SetShowPswd] = useState(false);
    const showFunc = function() {
      SetShowPswd( ! showPswd );
    }

    return (
    <>
    <div className={styles.field}>
        <input className={styles.input} id="username" type="name" placeholder="전화번호, 사용자 이름 또는 이메일" name='id' required/>
        <label className={styles.label} for="username">전화번호, 사용자 이름 또는 이메일</label>
    </div>
    <div className={styles.field}>
        <input className={styles.input} id="password" type={showPswd ? 'text' : 'password'} placeholder="비밀번호" name='password' required/>
        <label className={styles.label} for="password">비밀번호</label> 
        <label for='username' className={styles.showButton} onClick={showFunc}>{ showPswd ? '숨기기' : '비밀번호 표시'}</label>
    </div>
    <button className={styles.loginButton} title="login" type="submit">로그인</button>
    <div className={styles.separator}>
        <div className={styles.line}></div>
        <p>또는</p>
        <div className={styles.line}></div>
    </div>
    </>
  )
}