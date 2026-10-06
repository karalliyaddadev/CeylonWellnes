import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Handshake,
  MessageCircle,
  Gauge,
} from "lucide-react";
import Cta from "@/components/Cta/Cta";
import { corporateAdventureContent as content } from "@/data/corporateAdventures";
import styles from "./page.module.css";

export const metadata = content.metadata;

const outcomeIcons = {
  leadership: Award,
  communication: MessageCircle,
  trust: Handshake,
  decision: Gauge,
};

function SectionHeading({ id, eyebrow, title, accent, description, light = false }) {
  return (
    <header className={`${styles.sectionHeading} ${light ? styles.lightHeading : ""}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.sectionTitle}>
        {title} <em>{accent}</em>
      </h2>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </header>
  );
}

export default function CorporateAdventuresPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="corporate-hero-title">
        <Image
          src={content.hero.image.src}
          alt={content.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>{content.hero.eyebrow}</p>
          <h1 id="corporate-hero-title" className={styles.heroTitle}>
            {content.hero.title} <em>{content.hero.accent}</em>
          </h1>
          <p className={styles.heroDescription}>{content.hero.description}</p>
          <div className={styles.heroActions}>
            <Link href="/contact?type=corporate" className={styles.primaryButton}>
              {content.labels.heroPrimary}
            </Link>
            <Link href="#programs" className={styles.secondaryButton}>
              {content.labels.heroSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.comparisonSection} aria-labelledby="why-title">
        <div className={styles.sectionContainer}>
          <SectionHeading
            id="why-title"
            eyebrow={content.positioning.eyebrow}
            title={content.positioning.title}
            accent={content.positioning.accent}
            description={content.positioning.description}
          />
          <div className={styles.comparisonGrid}>
            <article className={styles.typicalCard}>
              <p className={styles.cardEyebrow}>{content.labels.typicalEyebrow}</p>
              <h3>{content.positioning.typicalTitle}</h3>
              <ul>
                {content.positioning.typicalOutcomes.map((item) => (
                  <li key={item}><span aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </article>
            <article className={styles.wellnessCard}>
              <p className={styles.cardEyebrow}>{content.labels.corporateEyebrow}</p>
              <h3>{content.positioning.corporateTitle}</h3>
              <ul>
                {content.positioning.corporateOutcomes.map((item) => (
                  <li key={item}><span aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className={styles.comparisonClosing}>{content.positioning.closing}</p>
        </div>
      </section>

      <section className={styles.outcomesSection} aria-labelledby="outcomes-title">
        <div className={styles.sectionContainer}>
          <SectionHeading
            id="outcomes-title"
            eyebrow={content.labels.outcomesEyebrow}
            title={content.labels.outcomesTitle}
            accent={content.labels.outcomesAccent}
          />
          <div className={styles.outcomeGrid}>
            {content.outcomes.map((outcome) => {
              const Icon = outcomeIcons[outcome.icon];
              return (
                <article className={styles.outcomeCard} key={outcome.title}>
                  <Icon className={styles.outcomeIcon} size={27} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{outcome.title}</h3>
                  <p>{outcome.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.activitiesSection} aria-labelledby="activities-title">
        <div className={styles.sectionContainer}>
          <SectionHeading
            id="activities-title"
            eyebrow={content.labels.activitiesEyebrow}
            title={content.labels.activitiesTitle}
            accent={content.labels.activitiesAccent}
            description={content.labels.activitiesDescription}
            light
          />
          <div className={styles.activityGrid}>
            {content.activities.map((activity) => (
              <article className={styles.activityTile} key={activity.title}>
                <Image
                  src={activity.image.src}
                  alt={activity.image.alt}
                  fill
                  sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw"
                  className={styles.cardImage}
                />
                <div className={styles.activityOverlay} />
                <h3>{activity.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.sectionContainer}>
          <SectionHeading
            id="process-title"
            eyebrow={content.labels.processEyebrow}
            title={content.labels.processTitle}
            accent={content.labels.processAccent}
          />
          <ol className={styles.processGrid}>
            {content.process.map((step, index) => (
              <li className={styles.processStep} key={step.title}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.promiseSection} aria-label={content.labels.promiseEyebrow}>
        <div className={styles.sectionContainer}>
          <div className={styles.promiseHeading}>
            <p className={styles.eyebrow}>{content.labels.promiseEyebrow}</p>
            <h2>{content.labels.promiseTitle} <em>{content.labels.promiseAccent}</em></h2>
          </div>
          <ul className={styles.promiseList}>
            {content.promises.map((promise) => (
              <li key={promise}><span aria-hidden="true">✓</span>{promise}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.sectionContainer}>
          <SectionHeading
            id="faq-title"
            eyebrow={content.labels.faqEyebrow}
            title={content.labels.faqTitle}
            accent={content.labels.faqAccent}
          />
          <div className={styles.faqList}>
            {content.faqs.map((faq, index) => (
              <details className={styles.faqItem} key={faq.question} aria-label={`Frequently asked question ${index + 1}: ${faq.question}`}>
                <summary>
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Cta
        eyebrow={content.cta.eyebrow}
        title={content.cta.title}
        accent={content.cta.accent}
        description={content.cta.description}
        primaryHref="/contact?type=corporate"
        primaryText={content.labels.ctaPrimary}
        secondaryText={content.labels.ctaSecondary}
      />
    </main>
  );
}