import React from "react";
import styles from "../css/Component.module.css";
import image from "../assets/villa.avif";
import Image from "next/image";
import Link from "next/link";

export default function Card( { property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, externalID  } } ) {
 
  return (
    <Link href={`/property/${externalID}`} passHref>
    <div className={styles.card}>
      <div className={styles.image}>
        <Image 
         className={styles.image} 
         src={ coverPhoto ? coverPhoto.url : image}
         alt="Property image"
         width={'300px'}         
         height={'220px'}         
         />
      </div>
      <div className={styles.card_content}> 
        <span>AED {price}</span>
        <small> {`/${rentFrequency}`} </small>
        <h3>{title.length > 26 ? `${title.substring(0, 26)}...` : title}</h3>
        <span>2699 Green Valley, Highland Lake, FL</span>
        <hr />
        <div className={styles.features}>
          <img src="https://img.icons8.com/ios/20/8d5cff/bed.png" />
          <span>{rooms} Rooms</span>
          <img src="https://img.icons8.com/windows/20/8d5cff/hydrotherapy.png" />
          <span>{baths} Bathrooms</span>
          <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/18/8d5cff/external-Size-arrows-tanah-basah-basic-outline-tanah-basah.png" />
          <span>{Math.round(area)} m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
    </Link>

  );
}
