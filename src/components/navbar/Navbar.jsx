'use client'
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import { Switch, IconButton } from "@mui/material";
import { Nightlight as NightIcon, WbSunny as DayIcon } from "@mui/icons-material";
import { ThemeContext } from "@/context/ThemeContext";
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 6,
      title: "About",
      url: "/about",
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
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
  ];
  const {toggle,mode} = useContext(ThemeContext);
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setDarkTheme((prevTheme) => !prevTheme);
    // You can also apply your theme switching logic here
  };
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        devTalks
      </Link>
      
      <div className={styles.links}>
      <IconButton
          color="default"
          onClick={toggle}
          className={styles.themeSwitch}
        >
          {mode ==='dark' ? <DayIcon sx={{color:'white'}} /> : <NightIcon sx={{color:'black'}} />}
        </IconButton>
        {links?.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
   
        <button className={styles.logout}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
