import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Photography" }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        cxxxzzxccc
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Elijah-Dev 2020</footer>
    </div>
  );
};

export default Layout;
