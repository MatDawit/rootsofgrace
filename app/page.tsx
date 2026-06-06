import Image from "next/image";
import FallingLeaves from "./falling-leaves";
import ScrollPath from "./scroll-path";
import SectionNav from "./section-nav";
import styles from "./page.module.css";

const chapters = [
  {
    eyebrow: "Memory Fragment",
    title: "Skull",
    variant: "witness",
    copy: (
      <>
        According to <em>Archaeology</em>, a publication of the Archaeological
        Institute of America, the discovery of a one-million-year-old skull in
        the Afar region of Eritrea is a significant milestone in understanding
        human evolution. The skull, which bears traits of both Homo erectus and
        Homo sapiens, &quot;[pushes] back the development of modern human
        morphology by some 300,000 years. Excavated between 1995 and 1997 by
        Ernesto Abbate of the Universita di Firenze (Florence, Italy) and an
        international team of paleoanthropologists, the nearly complete cranium
        of an adult, along with two pelvic fragments and two incisors, was
        recovered from ancient lake and river sediments deposited within the
        primarily volcanic Northern Danakil Formation.&quot;
      </>
    ),
    image: "/Skull.jpg",
    alt: "Historical skull artifact",
    width: 1080,
    height: 1350,
  },
  {
    eyebrow: "At the Center",
    title: "Family",
    copy: "Grace begins at home. Before it becomes history, before it becomes identity, before it becomes the story of a people, it originates in the places where a child is formed: in a mother’s sacrifice, a father’s wisdom, a grandmother’s blessing, a neighbor’s care, and a community’s watchful love. Before we understand the larger story of Eritrea, we first need to understand the people who raised us and the values they instilled in us. This is where that journey begins.",
    image: "/Family.jpg",
    alt: "Family portrait",
    width: 1080,
    height: 1350,
  },
  {
    eyebrow: "The Price of History",
    title: "Bearing Witness",
    variant: "witness",
    copy: "Amid the fierce Battle of Adwa, fought on March 1, 1896, there was a stark contrast in the treatment of the prisoners. While many Italian prisoners of war were humanely cared for by the Ethiopians and eventually sent back to Eritrea through Djibouti, countless Eritrean askaris met their agonizing end on Abyssinian soil. In a brutal display of retribution, Emperor Menelik of Ethiopia ordered captured Eritreans to be savagely mutilated by having their right hands and left legs amputated with axes and machetes, leaving behind a gruesome pile of severed body parts that rotted under the scorching sun. Eritreans’ cries for mercy carried across the abandoned fields, their blood marking the farmlands of Tigray, a stark reminder of the brutality they endured at the hands of the Abyssinian rulers. Many did not survive.",
    image: "/Mutilated.jpg",
    alt: "Historical Eritrean askaris",
    width: 1600,
    height: 980,
  },
  {
    eyebrow: "Voice of a Nation",
    title: "Woldeab Woldemariam and Ibrahim Sultan Ali",
    variant: "witness",
    copy: 'In one of his interviews, Woldeab Woldemariam emphasized that “90% of the credit for preserving Eritrea in one piece goes to Ibrahim Sultan Ali. His pivotal role in preserving Eritrea’s unity is a testament to his heroic patriotism, deserving the praise and gratitude of the entire Eritrean people." Woldeab Woldemariam also remarked, “I always said: ‘I am not a Christian, I am not a highlander. I am an Eritrean.’” Knowing how close Woldeab Woldemariam and Ibrahim Sultan were, I’m also sure that Ibrahim Sultan would have said, “I am not a Muslim, I am not a lowlander. I am an Eritrean.” These giants’ transcending patriotism knew no boundaries.',
    image: "/Woldeab-Ibrahim.jpg",
    alt: "Woldeab Ibrahim",
    width: 1080,
    height: 1350,
  },
  {
    eyebrow: "The Spark of Resistance",
    title: "Hamid Idris Awate",
    copy: "September 1, 1961, marked a turning point in the collective consciousness of Eritreans. It was a statement to the world that a people denied justice and silenced in every other forum would not quietly accept subjugation. With that first bullet, Hamid Idris Awate and his companions ignited a movement that inspired generations, sustained decades of sacrifice, and ultimately defined the nation’s commitment to freedom.",
    image: "/Awate.jpg",
    alt: "Hamid Idris Awate",
    width: 1080,
    height: 1440,
  },
  {
    eyebrow: "Wisdom & Hardship",
    title: "Adey Zeineb Yasin",
    copy: "Among the many women whose courage defined this transformation, few shine as brightly as Zeineb (Zeinab, Zeyneb) Yassin Suleiman, affectionately known as Adey Zeineb and “Mother of the Revolutionaries.” Born in 1918 in the town of Afabet, Adey Zeineb was herself both a mother and a grandmother when she joined the EPLF in 1977 alongside her husband and two sons. Her life and work embodied the egalitarian ideals proclaimed by the EPLF. More than a participant, she became a symbol of the mighty strength of women who carried the revolution not only in their hands but also in their hearts.",
    image: "/Adey.jpg",
    alt: "Adey Zeineb Yasin",
    width: 1080,
    height: 1350,
  },
];

const testimonials = [
  {
    quote:
      "Roots of Grace is a compelling and deeply human memoir about consequential choices, raw empathy, and the identities we inherit and acquire. Through Dawit and Mona's remarkable act of love, the narrative weaves together the personal, familial, communal, and national, making the story both cogent and deeply resonant.",
    author:
      "Zemhret Yohannes, Research and Documentation Center (RDC), Eritrea",
  },
  {
    quote:
      "Roots of Grace is heartwarming and deeply moving story of compassion, love, and humility, tracing the journey of a young couple whose family grows through adoption and birth. Their family story is beautifully interwoven with the broader history and enduring struggles of the Eritrean people. The result is a captivating tribute to family, cultural identity, perseverance, and the power of grace.",
    author:
      "Kiflai Gebremedhin. Ph.D., ASABE Fellow and International Professor Emeritus, Cornell University, Ithaca, New York",
  },
  {
    quote:
      "In Roots of Grace, the memoir and the history of Eritrea breathe together on every page, making each more vivid. This is a book full of love: love for family, for community, and for the texture of a life lived between two countries and two cultures. Fundamentally, it is a book of hope, a precious reminder of possibility.",
    author:
      "Mina Samuels, award-winning author, editor, and human rights advocate",
  },
];

const fallbackLeaves = [
  { left: "6%", top: "-18px", size: "14px", duration: "9.6s", delay: "-0.6s" },
  {
    left: "14%",
    top: "-82px",
    size: "18px",
    duration: "11.2s",
    delay: "-2.1s",
  },
  { left: "23%", top: "-34px", size: "13px", duration: "8.8s", delay: "-3.4s" },
  {
    left: "33%",
    top: "-118px",
    size: "16px",
    duration: "10.4s",
    delay: "-1.2s",
  },
  { left: "41%", top: "-56px", size: "12px", duration: "9.1s", delay: "-4.2s" },
  {
    left: "51%",
    top: "-96px",
    size: "17px",
    duration: "11.7s",
    delay: "-2.9s",
  },
  { left: "62%", top: "-26px", size: "15px", duration: "9.9s", delay: "-5.1s" },
  {
    left: "72%",
    top: "-138px",
    size: "19px",
    duration: "12.1s",
    delay: "-0.9s",
  },
  { left: "80%", top: "-48px", size: "14px", duration: "9.4s", delay: "-3.8s" },
  {
    left: "89%",
    top: "-108px",
    size: "16px",
    duration: "10.7s",
    delay: "-1.7s",
  },
];

export default function Home() {
  return (
    <div id="page-top" className={styles.pageShell}>
      <svg
        className={styles.textureOverlay}
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <filter id="page-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.15 0"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          fill="transparent"
          filter="url(#page-noise)"
        />
      </svg>

      <SectionNav />

      <main className={styles.mainContent}>
        <section id="top" className={styles.hero}>
          <div className={styles.heroImageWrap} aria-hidden="true">
            <Image
              className={styles.heroImage}
              src="/Tree.jpg"
              alt="Jacaranda tree framing the Roots of Grace landing page"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className={styles.heroOverlay} aria-hidden="true" />

          <div className={styles.fallbackLeaves} aria-hidden="true">
            {fallbackLeaves.map((leaf) => (
              <span
                key={`${leaf.left}-${leaf.delay}`}
                className={`${styles.leaf} ${styles.fallbackLeaf}`}
                style={{
                  left: leaf.left,
                  width: leaf.size,
                  height: `calc(${leaf.size} * 0.72)`,
                  ["--fallback-start-y" as string]: leaf.top,
                  ["--fallback-duration" as string]: leaf.duration,
                  ["--fallback-delay" as string]: leaf.delay,
                }}
              />
            ))}
          </div>

          <FallingLeaves />

          <div className={styles.heroFade} aria-hidden="true" />

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Roots of Grace</h1>
            <p className={styles.heroSubtitle}>
              Family, Community, and the Untold Story of Eritrea
            </p>
            <div
              className={`${styles.testimonials} ${styles.heroTestimonials}`}
            >
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={`hero-${testimonial.author}`}
                  className={styles.testimonialSlide}
                  style={{
                    ["--slide-delay" as string]: `${index * 6}s`,
                  }}
                >
                  <p className={styles.testimonialText}>{testimonial.quote}</p>
                  <cite className={styles.testimonialAuthor}>
                    {`- ${testimonial.author}`}
                  </cite>
                </blockquote>
              ))}
            </div>
            <a className={styles.primaryCta} href="#narrative">
              Begin the Journey
            </a>
          </div>
        </section>

        <div className={styles.storyFlow} id="story">
          <div className={styles.storyTexture} aria-hidden="true" />
          <ScrollPath />

          <section className={styles.chapterSection} id="narrative">
            {chapters.map((chapter, index) =>
              chapter.variant === "witness" ? (
                <section key={chapter.title} className={styles.witnessSection}>
                  <div className={styles.witnessIntro}>
                    <p className={styles.eyebrow}>{chapter.eyebrow}</p>
                    <h2 className={styles.sectionTitle}>{chapter.title}</h2>
                    <p className={styles.bodyText}>{chapter.copy}</p>
                  </div>

                  <div className={styles.witnessImageWrap}>
                    <Image
                      className={styles.witnessImage}
                      src={chapter.image}
                      alt={chapter.alt}
                      width={chapter.width}
                      height={chapter.height}
                    />
                  </div>
                </section>
              ) : (
                <article
                  key={chapter.title}
                  className={`${styles.chapterGrid} ${index % 2 === 1 ? styles.chapterGridReverse : ""}`}
                >
                  <div className={styles.chapterCopy}>
                    <p className={styles.eyebrow}>{chapter.eyebrow}</p>
                    <h2 className={styles.sectionTitle}>{chapter.title}</h2>
                    <p className={styles.bodyText}>{chapter.copy}</p>
                  </div>

                  <div className={styles.chapterImageFrame}>
                    <Image
                      className={styles.chapterImage}
                      src={chapter.image}
                      alt={chapter.alt}
                      width={chapter.width}
                      height={chapter.height}
                    />
                  </div>
                </article>
              ),
            )}
          </section>

          <section className={styles.quoteSection}>
            <div className={styles.quoteRule} aria-hidden="true" />
            <p className={styles.quoteMark} aria-hidden="true">
              “
            </p>
            <blockquote className={styles.quoteText}>
              In defiance, Eritrea was born; in defiance, it will live forever.
            </blockquote>
            <cite className={styles.quoteCitation}>
              — Professor Tekie Fessehatzion
            </cite>
            <div className={styles.quoteRule} aria-hidden="true" />
          </section>

          <section className={styles.authorSection} id="author">
            <div className={styles.authorGrid}>
              <div className={styles.authorPortraitFrame}>
                <div aria-hidden="true" />
                <Image
                  className={styles.authorPortrait}
                  src="/Dawit.jpeg"
                  alt="Portrait of Dawit Gebremichael Habte"
                  width={1200}
                  height={1200}
                />
              </div>

              <div className={styles.authorCopy}>
                <div>
                  <p className={styles.eyebrow}>About the Author</p>
                  <h2 className={styles.sectionTitle}>
                    Dawit Gebremichael Habte
                  </h2>
                </div>
                <p className={styles.bodyText}>
                  After arriving in the United States as a young immigrant,
                  Dawit studied Biophysics and Computer Science at Johns Hopkins
                  University and built a career in large-scale technology
                  infrastructure and DevOps leadership at Bloomberg while
                  remaining deeply committed to his Eritrean heritage. Through
                  mentorship initiatives, youth development programs, and
                  community organizing, he has worked to bridge generations in
                  the diaspora. <em>Roots of Grace</em> continues the journey
                  begun in <em>Gratitude in Low Voices</em>, his first memoir,
                  offering a powerful meditation on identity, belonging, and the
                  enduring strength of family.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.purchaseSection} id="purchase">
            <div className={styles.purchaseCard}>
              <h2 className={styles.purchaseTitle}>Complete the Journey</h2>
              <p className={styles.purchaseCopy}>
                Discover the full story of family, community, and the untold
                history of Eritrea. <em>Roots of Grace</em> is available now in
                hardcover, paperback, and ebook formats.
              </p>
              <div className={styles.purchaseActions}>
                <a
                  className={styles.primaryCta}
                  href="https://www.amazon.com/Roots-Grace-Family-Community-Eritrea/dp/195758842X"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <p className={styles.footerBrand}>Roots of Grace</p>
            <p className={styles.footerText}>
              © 2026 Dawit Gebremichael Habte. All rights reserved.
            </p>
          </div>
          <nav className={styles.footerLinks} aria-label="Footer">
            <a href="#top">Back to Top</a>
            <a href="https://www.amazon.com/Roots-Grace-Family-Community-Eritrea/dp/195758842X">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
