import React from "react";
import styles from "../css/Component.module.css";
import sample from "../assets/villa.avif";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image className={styles.image} src={sample} />
      </div>
      <div className={styles.card_content}>
        <span>$2,000</span>
        <small> /month</small>
        <h3>Palm Harbor</h3>
        <span>2699 Green Valley, Highland Lake, FL</span>
        <hr />
        <div>
          <span>3 Beds</span>
          <span> 2 Bathrooms</span>
          <span>
            {" "}
            5 x 7 m <sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
}
