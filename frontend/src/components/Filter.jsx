import React, { useState } from "react";
import styles from "../css/Component.module.css";
import css from "../../styles/Global.module.css";
// import { useRouter } from "next/router";
import { baseURL, fetchData } from "../utils/fetchAPI";

export default function Filter() {
  const [name, setName] = useState("");
  const [size, setSize] = useState();
  const [price, setPrice] = useState();

  const [searchFilters, setSearchFilters] = useState(false);
  // const router = useRouter();

  return (
    <div className={styles.filter}>
      <div className={styles.section}>
        <span>Name</span>
        <input
        onChange={(e) => setName(e.target.value)}
        type="text" name="" id="" />
      </div>
      <span className={styles.vr}></span>
      <div className={styles.section}>
        <span>
          Size
          <small>
            &#40; in m<sup>2</sup>&#41;
          </small>{" "}
        </span>
        <input
        onChange={(e) => setSize(e.target.value)}
        type="number" name="" id="" />
      </div>
      <span className={styles.vr}></span>
      <div className={styles.section}>
      <span>
          Price
          <small>
            &#40; in AED &#41;
          </small>{" "}
        </span>
        <input
        onChange={(e) => setPrice(e.target.value)}
        type="number" name="" id="" />
      </div>
      {/* <span className={styles.vr}></span>
      <div className={styles.section}>
        <span>Property Type</span>
        <select defaultValue="house" onChange={(e) => setType(e.target.value)}>
          <option value="house">Houses</option>
          <option value="villa">Villas</option>
          <option value="apartment">Apartments</option>
          <option value="hostel">Hostels</option>
        </select>
      </div> */}
      <span className={styles.vr}></span>
      <div className={styles.section}>
        <button className={css.btn_primary}>Search</button>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchData(
    `${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
