import Head from "next/head";
import Image from "next/image";
import Card from "../src/components/Card";
import Filter from "../src/components/Filter";
import styles from "../styles/Home.module.css";
import styles2 from "../src/css/Component.module.css";
import css from "../styles/Global.module.css";
import { baseURL, fetchData } from "../src/utils/fetchAPI";
import { useState } from "react";
import SearchFilters from "../src/components/SearchFilters";

export default function Home({ propertiesForRent }) {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [amount, setAmount] = useState("");
  // console.log(propertiesForRent)
  // console.log(name);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta
            name="description"
            content="Rent a prooperty app built with Nextjs"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {/* <Filter /> */}

          <div className={styles2.filter}>
            <div className={styles2.section}>
              <span>Name</span>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name=""
                id=""
              />
            </div>
            <span className={styles2.vr}></span>
            <div className={styles2.section}>
              <span>
                Size
                <small>
                  &#40; in m<sup>2</sup>&#41;
                </small>{" "}
              </span>
              <input
                onChange={(e) => setSize(e.target.value)}
                type="number"
                name=""
                id=""
              />
            </div>
            <span className={styles2.vr}></span>
            <div className={styles2.section}>
              <span>
                Price
                <small>&#40; in AED &#41;</small>{" "}
              </span>
              <input
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                name=""
                id=""
              />
            </div>
            {/* <span className={styles2.vr}></span>
            <div className={styles2.section}>
              <button className={css.btn_primary}>Search</button>
            </div> */}
          </div>

          <div className={styles.listing}>
            {propertiesForRent &&
              propertiesForRent.map((property) =>
                property.title.toLowerCase().includes(name) ? (
                  <Card key={property.id} property={property} />
                ) : (
                  ""
                )
              )}
          </div>
          {/*           
          <div className={styles.listing}>
            {propertiesForRent &&
              propertiesForRent.map(
                (property) => (
                  Math.round(property.area) >= size ? (
                    <Card key={property.id} property={property} />
                  ) : (
                    ""
                  )
                )
              )}
          </div>
          
          
          <div className={styles.listing}>
            {propertiesForRent &&
              propertiesForRent.map(
                (property) => (
                  property.price <= amount ? (
                    <Card key={property.id} property={property} />
                  ) : (
                    ""
                  )
                )
              )}
          </div> */}

          {/* { propertiesForRent.price <= price ? (
             <div className={styles.listing}>
             {propertiesForRent.map((property) => (
               <Card key={property.id} property={property} />
             ))}
           </div>
          ) : (
            <h2>No data found</h2>
          )} */}

          {/* <div className={styles.listing}>
            {propertiesForRent.map((property) => (
              <Card key={property.id} property={property} />
            ))}
          </div> */}
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const propertyForRent = await fetchData(
    `${baseURL}properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=20`
  );

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
