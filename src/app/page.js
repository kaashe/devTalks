import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/5.svg";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>
          Turning your ideas into realities. We bring togather the teams for the global tech industry.
        </p>
        <Button url={'/portfolio'} text={'See our Work'} />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero}  alt="" />
      </div>
    </div>
  );
}
