import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>®2023 devTalks. All Right Reserved</div>
      <div className={styles.imageContainer}>
        <Image className={styles.socialIcon} src='/1.png' width={15} height={15} alt='test'/>
        <Image className={styles.socialIcon} src='/2.png' width={15} height={15} alt='test'/>
        <Image className={styles.socialIcon} src='/3.png' width={15} height={15} alt='test'/>
        <Image className={styles.socialIcon} src='/4.png' width={15} height={15} alt='test'/>
      </div>
    </div>
  );
};

export default Footer;
