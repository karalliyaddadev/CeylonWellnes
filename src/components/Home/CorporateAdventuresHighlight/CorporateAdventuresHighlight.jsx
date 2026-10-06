import Image from "next/image";
import Link from "next/link";
import { corporateAdventureContent } from "@/data/corporateAdventures";
import styles from "./CorporateAdventuresHighlight.module.css";

const content = corporateAdventureContent.homePromotion;

export default function CorporateAdventuresHighlight() {
  return (
    <section className={styles.section} aria-labelledby="corporate-promotion-title">
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id="corporate-promotion-title" className={styles.title}>
            {content.title} <em>{content.accent}</em>
          </h2>
          <p className={styles.description}>{content.description}</p>
          <ul className={styles.highlights}>
            {content.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <Link href="/corporate-adventures" className={styles.link}>
            {corporateAdventureContent.labels.homeLink} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}