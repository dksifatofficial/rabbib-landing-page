import { FaLocationArrow, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div
      className="w-full h-auto grid justify-items-center pt-[100px] mb-[100px]"
      id="contact"
    >
      <h1
        className=" px-[100px] py-[10px] rounded-[10px] text-4xl font-semibold
      bg-[#fff] text-[000]"
      >
        Contact Us
      </h1>

      <div className="mt-[50px] flex justify-around w-full px-[50px]">
        <div
          className={styles.span}
        >
          <div className={styles.logoSection}>
            <FaLocationArrow className={styles.logo} color="#4144f7" />
          </div>
          <div className={styles.text}>
            <h3>
              Address
            </h3>
            <p>
              Shaheen Monjil, BSCIC road, Barishal, Bangladesh
            </p>
          </div>
        </div>

        <div className={styles.span}>
          <div className={styles.logoSection}>
            <FaEnvelope className={styles.logo} color="#14cdfc" />
          </div>
          <div className={styles.text}>
            <h3>Email</h3>
            <p className={styles.contactEmail}>a@aminulkibria.com</p>
            <p className={styles.contactEmail}>aminulkibria@gmail.com</p>
          </div>
        </div>

        <div className={styles.span}>
          <div className={styles.logoSection}>
            <FaPhone className={styles.logo} color="#30c367" />
          </div>
          <div className={styles.text}>
            <h3>Phone</h3>
            <p>+880 1722 020182</p>
            <p>+880 1993 383387</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
