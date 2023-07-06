import Link from "next/link";
import classes from "../styles/Footer.module.css";
import Socialicon from "./Socialicon";

function Footer() {
  return (
    <div className="flex flex-wrap bg-blue-400 w-full justify-center py-10">
      <div className={classes.tags}>
        <Link href="#home">Home</Link>
        <Link href="#aboutMe">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <div className={classes.icons}>
        <Socialicon />
      </div>
      <div className="w-full text-center px-2.5 py-[5px]">
        <h4 className=" font-semibold text-[#fff]">
          Rain Tree © 2023 . Compile by
          <Link className=" hover:text-[#acabab]" href="https://www.aminulkibria.com" target="_blank">
            {" "}
            Aminul Kibria
          </Link>
        </h4>
        <h4 className=" font-semibold text-[#fff]">
          The website is build with <span className="underline">NEXT-JS</span>
        </h4>
      </div>
    </div>
  );
}

export default Footer;
