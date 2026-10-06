import styles from "./Testimonial.module.css";
import Image from "next/image";

export default function Testimonial({ testimonials, eyebrow, heading }) {
  if (testimonials) {
    return (
      <section className={styles.section} aria-labelledby="corporate-testimonial-title">
        <div className={styles.headingBox}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="corporate-testimonial-title" className={styles.title1}>{heading}</h2>
        </div>
        <div className={styles.corporateContainer}>
          {testimonials.map((testimonial, index) => (
            <article className={`${styles.card} ${styles.corporateCard} ${styles[`card${index + 1}`]}`} key={testimonial.name}>
              <Image
                src={testimonial.image.src}
                alt={testimonial.image.alt}
                className={styles.img}
                width={48}
                height={48}
              />
              <h3 className={styles.name}>{testimonial.name}</h3>
              <p className={styles.title}>{testimonial.role}, {testimonial.company}</p>
              <p className={styles.mainQuote}>{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div className={styles.section}>

    <div className={styles.headingBox}>
            <p className={styles.eyebrow}>Real Experiences from Curated Wellness Journeys</p>

            <h1 className={styles.title1}>
              What Guests Feel <span>After Their Journey</span>
            </h1>
          </div>

    <div className={styles.container}>

      {/* Card 1 */}
      <div className={`${styles.card} ${styles.card1}`}>
        <Image
          src="/emma.webp"
          alt="Emma"
          className={`${styles.img} ${styles.accentBorder}`}
          width={28}
          height={28}
        />
        <h2 className={styles.name}>Emma Clarke</h2>
        <p className={styles.title}>United Kingdom</p>
        <h1 className={styles.mainQuote}>
          A perfectly tailored wellness escape in Sri Lanka.
        </h1>
        <p className={styles.testimonial}>
          Every detail of my journey was carefully planned around my stress levels, 
          comfort, and wellness goals from start to finish. I never had to worry about 
          logistics, timing, or coordination, as everything was seamlessly organised across 
          different wellness regions. The experience felt deeply personal, with each treatment, stay, and transition thoughtfully 
          aligned to how I wanted to feel and recover throughout the trip.
        </p>
      </div>

      {/* Card 2 */}
      <div className={`${styles.card} ${styles.card2}`}>
        <Image
          src="/daniel.webp"
          alt="Daniel"
          className={styles.img}
          width={28}
          height={28}
        />
        <h2 className={styles.name}>Daniel Wright</h2>
        <p className={styles.title}>Australia</p>
        <h1 className={styles.mainQuote}>
          Felt completely taken care of from start to finish
        </h1>
        <p className={styles.testimonial}>
          I didn’t have to plan anything myself, everything was designed 
          for me including stays, treatments, and travel between regions.
        </p>
      </div>

      {/* Card 3 */}
      <div className={`${styles.card} ${styles.card3}`}>
        <Image
          src="/sophie.webp"
          alt="Sophie"
          className={styles.img}
          width={28}
          height={28}
        />
        <h2 className={styles.name}>Sophie Laurent</h2>
        <p className={styles.title}>France</p>
        <h1 className={styles.mainQuote}>
          More than travel, it felt like deep personal healing
        </h1>
        <p className={styles.testimonial}>
          From Ella to coastal Ayurveda retreats, every experience was matched perfectly to 
          my emotional and physical needs.
        </p>
      </div>

      {/* Card 4 */}
      <div className={`${styles.card} ${styles.card4}`}>
        <Image
          src="/michael.webp"
          alt="Michael"
          className={`${styles.img} ${styles.accentBorder}`}
          width={28}
          height={28}
        />
        <h2 className={styles.name}>Michael Thompson</h2>
        <p className={styles.title}>Canada</p>
        <h1 className={styles.mainQuote}>
          Every treatment felt designed just for me personally.
        </h1>
        <p className={styles.testimonial}>
          The Ayurveda sessions, wellness stays, and daily routines were perfectly 
          balanced across Sri Lanka based on my personal requirements. What stood out 
          most was how every part of the journey adapted to my condition, energy levels, and 
          preferences, making the entire experience feel effortless, structured, and 
          genuinely restorative without ever feeling generic or pre-planned.
        </p>
      </div>

      {/* Card 5 */}
      <div className={`${styles.card} ${styles.card5}`}>
        <Image
          src="/isabella.webp"
          alt="isabella"
          className={styles.img}
          width={28}
          height={28}
        />
        <h2 className={styles.name}>Isabella Rossi</h2>
        <p className={styles.title}>Italy</p>
        <h1 className={styles.mainQuote}>
          I finally experienced stress-free, meaningful travel planning
        </h1>
        <p className={styles.testimonial}>
          They managed everything across multiple wellness regions so I 
          could simply focus on relaxing, healing, and enjoying every moment.
        </p>
      </div>
    </div>
    </div>
  );
}