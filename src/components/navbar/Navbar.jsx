import Link from "next/link";
import React from "react";
import styles from './navbar.module.css';
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 5,
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 6,
      title: "About",
      url: "/about",
    },
  ];
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>devTalks</Link>
      <div className={styles.links}>
        {links?.map(link=>(
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
