import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import classes from "../styles/Socialicon.module.css";

function Socialicon({ className, ...rest }) {
  return (
    <div className={classes.icons} {...rest}>
      <Link
        href="https://www.facebook.com/SIFATtheDK"
        rel="noreferrer"
        target="_blank"
      >
        <FaFacebook />
      </Link>

      <Link
        href="https://twitter.com/Aminulkibria"
        rel="noreferrer"
        target="_blank"
      >
        <FaTwitter />
      </Link>

      <Link
        href="https://www.linkedin.com/in/aminul-kibria-996a20230"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </Link>

      <Link
        href="https://github.com/dksifatofficial?tab=repositories"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub />
      </Link>
    </div>
  );
}

export default Socialicon;
