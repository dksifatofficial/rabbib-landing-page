import Link from "next/link";
import classes from "../styles/Footer.module.css";
import Socialicon from "./Socialicon";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.tags}>
        <Link href="#home">Home</Link>
        <Link href="#aboutMe">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <div className={classes.icons}>
        <Socialicon />
      </div>
      <div className={classes.textur}>
        <h4>
          Rain Tree © 2023 . Published with{" "}
          <Link href="#" style={{ color: "white" }}>
            {" "}
            StarLink
          </Link>
        </h4>
        <h4>JavaScript license information</h4>
      </div>
    </div>
  );
}

export default Footer;
