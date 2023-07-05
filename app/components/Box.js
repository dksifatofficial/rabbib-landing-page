import classes from "../styles/box.module.css";

function Box({ className, children }) {
  return (
    <div className={classes.box}>
      <div className={`${classes.text} ${className}`}>{children}</div>
    </div>
  );
}

export default Box;
