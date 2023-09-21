import styles from './component.module.css';

export default function Hamburger() {
  return (
    <>
    <input type="checkbox" className={styles.menuicon}/>
    <label for="menuicon">
        <span></span>
        <span></span>
        <span></span>
    </label>
    <div class={styles.sidebar}></div>
    </>
  )
}