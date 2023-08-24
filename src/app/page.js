import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>
          Turning your ideas into realities. We bring togather the teams for the global tech industry.
        </p>
        <button className={styles.btn}>See Our Work</button>
      </div>
      <div >
        <Image className={styles.imageContainer} src={Hero}  alt="" />
      </div>
    </div>
  );
}
