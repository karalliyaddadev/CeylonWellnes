import styles from "./Cta.module.css";

export default function Cta({
  eyebrow = "Start Your Journey",
  title = "Let us design your",
  accent = "wellness experience in Sri Lanka",
  description = "Share your goals and we’ll create a fully personalised wellness journey designed around your comfort, pace, and needs.",
  primaryHref = "/contact",
  primaryText = "Get Started",
  secondaryHref = "https://wa.me/+94741351434",
  secondaryText = "WhatsApp Us",
}) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <p className={styles.eyebrow}>{eyebrow}</p>

        <h2 className={styles.title}>
          {title} <span>{accent}</span>
        </h2>

        <p className={styles.description}>
          {description}
        </p>

        <div className={styles.buttons}>
          <a href={primaryHref} className={styles.primaryBtn}>
            {primaryText}
          </a>

          <a href={secondaryHref} className={styles.secondaryBtn}>
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
}