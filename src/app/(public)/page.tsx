import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>I am main page and I'm under construction {' :)'}</main>
      <footer className={styles.footer}>
        <h3>im app footer</h3>
      </footer>
    </div>
  );
}
