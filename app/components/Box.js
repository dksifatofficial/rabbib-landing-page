import styles from "../styles/box.module.css";

function Box({ className, children }) {
  return (
    <div className={styles.box}>
      <div className={`${styles.text} ${className}`}>{children}</div>
    </div>
  );
}

export default Box;
