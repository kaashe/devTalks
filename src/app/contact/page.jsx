import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Connect</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
           src='/contact.png' 
           fill={true}
           className={styles.img}
           alt=""

          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name"  className={styles.input}/>
          <input type="text" placeholder="email"  className={styles.input}/>
          <textarea  cols="30" placeholder="message" rows="10" className={styles.textArea}></textarea>
          <Button url={"#"} text={'Send'} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
