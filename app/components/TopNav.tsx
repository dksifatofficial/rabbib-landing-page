"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "../styles/TopNav.module.css";

function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-wrap fixed z-50 bg-white w-full text-center transition-all duration-[1s]
    shadow-[1px_1px_5px_rgba(8,3,3,0.11)]"
    >
      <div
        className={`${classes.topMenu} ${isScrolled ? classes.scrolled : ""}`}
      >
        <ul className="h-[35px] flex align-middle">
          <li>
            <Link href="#banner">Home</Link>
          </li>
          <li>
            <Link href="#services">Service</Link>
          </li>
          <li>
            <Link href="#aboutMe">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
