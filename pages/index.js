import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next Js Demo</title>
        <meta
          name="description"
          content="This is a demo app of NextJs's all methods"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <ul className="m-5" style={{ listStyle: "none" }}>
          <li className="mb-5 h1">
            <Link href="/posts">
              <a className="">Post page</a>
            </Link>
          </li>
          <li className="mb-5 h1">
            <Link href="/photos">
              <a className="h1">Photos page</a>
            </Link>
          </li>
          <li className="mb-5 h1">
            <Link href="/about">
              <a>About page</a>
            </Link>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        Powered by <span className={styles.name}>Bhumik</span>
      </footer>
    </div>
  );
}
