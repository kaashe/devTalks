"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import {notFound} from "next/navigation";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    next:{revalidate:10},
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const { mode } = useContext(ThemeContext);
  const data = await getData();
  return (
    <div>
      {data?.map((item, id) => (
        <Link href={"/blog/testId"} className={styles.container} key={id}>
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
              <h1 className={styles.title}>{item?.title}</h1>
              <p className={mode === "light" ? styles.desklight : styles.desc}>
                {item?.body}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
