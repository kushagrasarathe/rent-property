import React, { useState } from "react";
import styles from "../css/Component.module.css";
import css from "../../styles/Global.module.css";

export default function Filter() {
  const [type, setType] = useState("");

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
        <select defaultValue="house" onChange={(e) => setType(e.target.value)}>
          <option value="house">Houses</option>
          <option value="villa">Villas</option>
          <option value="apartment">Apartments</option>
          <option value="hostel">Hostels</option>
        </select>
      </div>
      <span className={styles.vr}></span>
      <div className={styles.section}>
        <button className={css.btn_primary}>Search</button>
      </div>
    </div>
  );
}
