import styles from "../styles/ServiceBox.module.css";

function ServiceBox({ className, children, ...rest }) {
  return (
    <div className={styles.box} {...rest}>
      {children}
    </div>
  );
}

export default ServiceBox;
