import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Avatar } from "@mui/material";
import {notFound} from "next/navigation";
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    next:{revalidate:10},
  });
  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    throw notFound();
  }
  return res.json();
}
const BlogPost = async ({params}) => {
  const data  = await getData(params.id)
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.desc}>{data?.body}</p>
          <div className={styles.user}>
          <Avatar className={styles.icon} alt="kashif ullah" src="/me.jpeg" />
            <p className={styles.username}>Kashif Ullah</p>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="/post.svg" fill={true} alt="" className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
          totam consequatur ipsa repudiandae dicta quis facilis, animi,
          molestiae mollitia voluptas minus. Modi enim ea voluptatibus veniam
          dolore sapiente earum dicta. <br />
          <br /> Eum, architecto? Natus eligendi atque quisquam distinctio
          maiores dicta in reprehenderit, ab, vero fuga sit et similique
          consequatur quidem, eveniet voluptatum non labore. At, deserunt!
          Assumenda facilis autem accusamus quae. Sequi molestias vel eaque unde
          deserunt odit rem consequuntur saepe neque, hic nisi culpa, in
          voluptates? Officiis itaque vero, iste illo voluptatem, quam quas,
          earum eius repudiandae natus facilis nulla! Eum, architecto? Natus
          eligendi atque quisquam distinctio maiores dicta in reprehenderit, ab,
          vero fuga sit et similique consequatur quidem, eveniet voluptatum non
          labore. At, deserunt! Assumenda facilis autem accusamus quae. Sequi
          molestias vel eaque unde deserunt odit rem consequuntur saepe neque,
          hic nisi culpa, in voluptates? Officiis itaque vero, iste illo
          voluptatem, quam quas, earum eius repudiandae natus facilis nulla!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
