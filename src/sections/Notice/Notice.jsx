import styles from "./NoticeStyles.module.css";

function Notice() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Portfolio Update</h1>

        <p className={styles.text}>
          This portfolio has been replaced with a newer version that better
          reflects my latest projects and experience.
        </p>

        <p className={styles.text}>
          This site will remain available temporarily and is scheduled to be
          shut down in May 2026.
        </p>

        <a href="https://a-moiz-portfolio.netlify.app">
          <button className={styles.button}>Visit My New Portfolio</button>
        </a>
      </div>
    </div>
  );
}

export default Notice;
