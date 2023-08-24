import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
  return (
    <div>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            height={300}
            width={300}
            src={"/5.svg"}
          />
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              temporibus commodi, cum at numquam delectus. Commodi officiis,
              voluptatem consectetur velit, reiciendis qui iusto quia impedit
              ducimus vero, doloribus saepe ut.
            </p>
          </div>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            height={300}
            width={300}
            src={"/6.svg"}
          />
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              temporibus commodi, cum at numquam delectus. Commodi officiis,
              voluptatem consectetur velit, reiciendis qui iusto quia impedit
              ducimus vero, doloribus saepe ut.
            </p>
          </div>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            height={300}
            width={300}
            src={"/7.svg"}
          />
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              temporibus commodi, cum at numquam delectus. Commodi officiis,
              voluptatem consectetur velit, reiciendis qui iusto quia impedit
              ducimus vero, doloribus saepe ut.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
