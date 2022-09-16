import Head from "next/head";
import Image from "next/image";
import Card from "../src/components/Card";
import Filter from "../src/components/Filter";
import styles from "../styles/Home.module.css";
import { baseURL, fetchData } from "../src/utils/fetchAPI";
import { useState } from "react";
import SearchFilters from "../src/components/SearchFilters";

export default function Home({ propertiesForRent }) {
  // console.log(propertiesForRent)
  return (
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
        <Filter />
        <div className={styles.listing}>
          {propertiesForRent.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
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
