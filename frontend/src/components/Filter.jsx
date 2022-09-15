import React from "react";
import styles from "../css/Component.module.css";
import css from "../../styles/Global.module.css"

export default function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.section}>
        <span>Location</span>
        <input type="text" name="" id="" />
      </div>
      <span className={styles.vr}></span>
      <div className={styles.section}>
        <span>When</span>
        <input type="date" name="" id="" />
      </div>
      <span className={styles.vr}></span>
      <div className={styles.section}>
        <span>Price</span>
        <input type="text" name="" id="" />
      </div>
      <span className={styles.vr}></span>
      <div className={styles.section}>
        <span>Property Type</span>
        <select>
            <option value="">Houses</option>
            <option value="">Villas</option>
            <option value="">Apartments</option>
            <option value="">Hostels</option>
        </select>
      </div>
      <span className={styles.vr}></span>
      <div className={styles.section}>
        <button className={css.btn_primary}>Search</button>
      </div>
    </div>
  );
}
