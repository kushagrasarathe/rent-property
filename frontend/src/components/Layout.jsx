import React from "react";
import styles from "../css/Layout.module.css";
import css from "../../styles/Global.module.css";


export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.navbar}>
        <h3 className={styles.logo}>Estatery</h3>
        <ul className={styles.navlink}>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
        </ul>
        <div>
          <button className={css.btn_secondary}>Login</button>
          <button className={css.btn_primary}>Sign up</button>
        </div>
      </nav>
      {children}
      <footer className={styles.footer}>
        <span>Built by <a href="https://twitter.com/kushagrasarathe">Kushagra Sarathe</a></span>
      </footer>
    </>
  );
}
