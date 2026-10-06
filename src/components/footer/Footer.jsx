import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Image section */}
      <div className={styles.imageWrapper}>
        <Image
          src="/footer.jpg"
          alt="Footer Banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.grid}>
          {/* Left */}
          <div>
            <p className={styles.label}>Call us</p>

            <a href="tel:+94741351434" className={styles.phone}>
              +94 74 135 1434
            </a>

            <ul className={styles.hours}>
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className={styles.social}>
              <li>
                  <a
                    href="https://www.facebook.com/share/18g4E6zG8w/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                  </a>
                </li>
              <li>
                <Link href="/">
                  <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Image src="/whatsapp.png" alt="Whatsapp" width={24} height={24} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className={styles.linksGrid}>
            <div>
              <p className={styles.heading}>Wellness Journeys</p>
              <ul>
                <li><Link href="/treatment#restore" className={styles.headingMax}>Restore & Relax</Link></li>
                <li><Link href="/treatment#reset" className={styles.headingMax}>Reset & Rebalance</Link></li>
                <li><Link href="/treatment#reflect" className={styles.headingMax}>Reflect & Reconnect</Link></li>
                <li><Link href="/treatment#recover" className={styles.headingMax}>Recover & Renew</Link></li>
                <li><Link href="/treatment#work" className={styles.headingMax}>Work & Wellbeing</Link></li>
              </ul>
            </div>

            <div >
              <p className={styles.heading}>Quick Links</p>
              <ul>
                <li><Link href="/" className={styles.headingMax}>Home</Link></li>
                <li><Link href="/about" className={styles.headingMax}>About</Link></li>
                <li><Link href="/region" className={styles.headingMax}>Destinations</Link></li>
                <li><Link href="/treatment" className={styles.headingMax}>Wellness Journeys</Link></li>
                <li><Link href="/corporate-adventures" className={styles.headingMax}>Corporate Adventures</Link></li>
                <li><Link href="/contact" className={styles.headingMax}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <ul className={styles.policy}>
            <li><Link href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link></li>
            <li><Link href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link></li>
          </ul>

          <p>© 2026. Ceylon Wellness Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;