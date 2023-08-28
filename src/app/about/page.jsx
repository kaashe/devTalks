'use client'
import React, { useContext } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { ThemeContext } from "@/context/ThemeContext";
const imageUrl =
  "https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const About = () => {
  const {mode} = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Tellers </h1>
          <h2 className={styles.imgDexc}>
            Handcrafting awrd winning digital experiences
          </h2>
        </div>
      </div>
      
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={mode==='light'?styles.desklight:styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            accusamus consequatur explicabo vel corporis, in quisquam pariatur
            placeat autem iure sint vitae ipsum nobis, neque eligendi
            repellendus molestias minus corrupti.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            accusamus consequatur explicabo vel corporis, in quisquam pariatur
            placeat autem iure sint vitae ipsum nobis, neque eligendi
            repellendus molestias minus corrupti.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={mode==='light'?styles.desklight:styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            accusamus consequatur explicabo vel corporis, in quisquam pariatur
            placeat autem iure sint vitae ipsum nobis, neque eligendi
            repellendus molestias minus corrupti.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            accusamus consequatur explicabo vel corporis, in quisquam pariatur
            placeat autem iure sint vitae ipsum nobis, neque eligendi
            repellendus molestias minus corrupti.
          </p>
          <p>-Mobile Development</p>
          <p>-Web Development</p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
