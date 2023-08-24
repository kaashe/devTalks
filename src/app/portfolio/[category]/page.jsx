import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
const Category = ({ params }) => {
  console.log("params", params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <Button url={'/portfolio'} text={'Back'}/>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Humanoid</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
            praesentium ut reprehenderit vel atque minus, consequuntur sit
            beatae consectetur? Ad dolore, nulla commodi sed officia reiciendis
            sunt aut non?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.img} fill={true} src={"/6.svg"} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Undraw</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
            praesentium ut reprehenderit vel atque minus, consequuntur sit
            beatae consectetur? Ad dolore, nulla commodi sed officia reiciendis
            sunt aut non?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.img} fill={true} src={"/7.svg"} />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non natus
            praesentium ut reprehenderit vel atque minus, consequuntur sit
            beatae consectetur? Ad dolore, nulla commodi sed officia reiciendis
            sunt aut non?
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.img} fill={true} src={"/8.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Category;
