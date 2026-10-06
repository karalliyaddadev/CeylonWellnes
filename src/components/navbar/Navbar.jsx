"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>

        {/* LOGO */}
        <Link href="/#hero" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={40}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        {/* MENU */}
        <div className={`${styles.menu} ${open ? styles.show : ""}`}>
          <ul className={styles.list}>

            <li>
              <Link
                href="/#hero"
                className={pathname === "/" ? styles.active : styles.link}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? styles.active : styles.link}
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>

            

            <li>
              <Link
                href="/region"
                className={pathname === "/region" ? styles.active : styles.link}
                onClick={() => setOpen(false)}
              >
                Destinations
              </Link>
            </li>

            <li>
              <Link
                href="/treatment"
                className={pathname === "/treatment" ? styles.active : styles.link}
                onClick={() => setOpen(false)}
              >
                Wellness Journeys
              </Link>
            </li>

            <li>
              <Link
                href="/corporate-adventures"
                className={pathname === "/corporate-adventures" ? styles.active : styles.link}
                onClick={() => setOpen(false)}
              >
                Corporate Adventures
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={styles.contactButton}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;