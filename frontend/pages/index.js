import Head from "next/head";
import Image from "next/image";
import Card from "../src/components/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Rent a prooperty app built with Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.listing}>
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
