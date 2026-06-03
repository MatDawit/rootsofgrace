import Image from "next/image";
import FallingLeaves from "./falling-leaves";
import ScrollPath from "./scroll-path";
import SectionNav from "./section-nav";
import styles from "./page.module.css";

const chapters = [
  {
    eyebrow: "The Spark of Resistance",
    title: "Hamid Idris Awate",
    copy: "Tracing the lineage of a family against the backdrop of Eritrea's untold struggles, the narrative weaves together archival fragments and vivid personal memory. The story begins with the early flames of resistance, where ordinary individuals were called upon to bear extraordinary burdens.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_XjTRvN7CO8e-ge4eQsyV2R4gRQT0dxP1_U82eeZtBK52-No02TNPIh69nuz_R8iqgjze28rRX3ST6e6M5QE4qfj2BFli1hPFjEdBEksQ1pOaU2t7rXrsmKn3dHpO9HJIn4_4TjrI7CovqXZrd8lT-AUeQqw7tsQy31c1xF3vtfpyAI7JQDATx5jmIp9vHgq-C4zqpdznSrsITGZaCHZqESzRYM076mmwj50eAlm3GuBbp5RnPdWzxbzKmOq2Ff-xYyph6pMG590_",
    alt: "Hamid Idris Awate",
    width: 1080,
    height: 1440,
  },
  {
    eyebrow: "Wisdom & Hardship",
    title: "Adey Zeineb Yasin",
    copy: "Behind every battle line stood the matriarchs who held the community's soul intact. Their deeply lined faces show the wisdom and hardship of generations who navigated the perilous spaces between colonial ambition and indigenous survival.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXBcGqA6O21NgcwIdLTUKSvT94rqAemWJLd0VBJtLQ0uiHyEl4BEg82bC0hrrroN0NYK4UJs6dSDDI_4IwcMm52vOTSuaFsFZ9y2WwiNoKUFIpX2iMM5eV5f3-vet6O_E7GzfTf_hGx1YxgBOJj4HyS0iLHFnb8MN4CxSs5QyZjJcORSlj87xn8xjmS_9_0tf65s_ZmSFBNGA1C7pddtGoF_8hmpgk46_rNK025U0zt-QkBUp1_wAidA4WllSVaHvf7pQ-exPngWov",
    alt: "Adey Zeineb Yasin",
    width: 1080,
    height: 1350,
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
              src="https://lh3.googleusercontent.com/aida/AP1WRLu-0Fn0K9uAYlNPGQpO733Rp5MR55wW2YdAFziOf6k_IBrJkqfAXOWtaVbQWS22bn8gyFRl2JWExfMf4y32w2h4OBjx7kmB70_JgiUGzU64pxvUgLx16wBIpL1UY3TJHfOT8mgf9RDLRCf3uVj34lj6J-HdPrL_h92Ejo5upKLGpCRJLygweNXjHp8ehLci5FmQ74SYNNq92Fkowv4TWwrdGptfQlDXoO2EEl5NYqrSYf9GnXf9iHm5FLKf"
              alt="Jacaranda tree framing the Roots of Grace landing page"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className={styles.heroOverlay} aria-hidden="true" />

          <FallingLeaves />

          <div className={styles.heroFade} aria-hidden="true" />

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Roots of Grace</h1>
            <p className={styles.heroSubtitle}>
              Family, Community and the Untold Story of Eritrea
            </p>
            <p className={styles.heroCopy}>
              From the heavy, monochromatic weight of history to the vibrant,
              blooming clarity of the present. <em>Roots of Grace</em> is more
              than a memoir; it is an exploration of resilience forged in the
              crucible of conflict.
            </p>
            <a className={styles.primaryCta} href="#narrative">
              Begin the Journey
            </a>
          </div>
        </section>

        <div className={styles.storyFlow} id="story">
          <div className={styles.storyTexture} aria-hidden="true" />
          <ScrollPath />

          <section className={styles.chapterSection} id="narrative">
            {chapters.map((chapter, index) => (
              <article
                key={chapter.title}
                className={`${styles.chapterGrid} ${index % 2 === 1 ? styles.chapterGridReverse : ""}`}
              >
                <div className={styles.chapterCopy}>
                  <p className={styles.eyebrow}>{chapter.eyebrow}</p>
                  <h2 className={styles.sectionTitle}>{chapter.title}</h2>
                  <p className={styles.bodyText}>{chapter.copy}</p>
                  <a className={styles.secondaryCta} href="#purchase">
                    Read Excerpt
                  </a>
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
            ))}
          </section>

          <section className={styles.witnessSection}>
            <div className={styles.witnessIntro}>
              <p className={styles.eyebrow}>The Price of History</p>
              <h2 className={styles.sectionTitle}>Bearing Witness</h2>
              <p className={styles.bodyText}>
                The sacrifices made under colonial rule were immense. By
                confronting these visceral realities of the past, we begin to
                map the topography of our grace, ensuring that the heavy,
                monochromatic weight of history is acknowledged before we can
                look toward a horizon filled with blooming clarity.
              </p>
            </div>

            <div className={styles.witnessImageWrap}>
              <Image
                className={styles.witnessImage}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLRGFIzp2jvHuFDzogHSeoPGfyThHnVB0wjjq35hmj6r9yDjowPHBGQ2X3TrH8JkYflhuArcnSNeF6b3G1NW4RpgbIQXbMrNUz7JrLd77yvUyBn5MFfS2A3FqrbRZ17wF3LywADnr0TFldc-fA8qeMmwdryyYUTFTYD6q17tbnU0EUwa3yRqX-vZBM3GaoN0lgwNuPrilYg3NbPXwsntxgf-ZLupBXGL6IYYe2HdqGUUnUi4163Nne6oCYgKcO0JQlqxnZGIk4otn2"
                alt="Historical Eritrean askaris"
                width={1600}
                height={980}
              />
            </div>

            <a className={styles.secondaryCta} href="#purchase">
              Read Excerpt
            </a>
          </section>

          <section className={styles.quoteSection}>
            <div className={styles.quoteRule} aria-hidden="true" />
            <p className={styles.quoteMark} aria-hidden="true">
              “
            </p>
            <blockquote className={styles.quoteText}>
              We carry the scars of our fathers, not to bleed anew, but to map
              the topography of our grace.
            </blockquote>
            <cite className={styles.quoteCitation}>
              — Dawit Gebremichael Habte
            </cite>
            <div className={styles.quoteRule} aria-hidden="true" />
          </section>

          <section className={styles.authorSection} id="author">
            <div className={styles.authorGrid}>
              <div className={styles.authorPortraitFrame}>
                <div
                  className={styles.authorPortraitBorder}
                  aria-hidden="true"
                />
                <Image
                  className={styles.authorPortrait}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJRg39_3k1dJj32C8IhibIQ_loy31CyqSflZYyil8U2TV-J1svPyp8a6nt_4aWVAHwDFewaw9Arp_iv0W8ifI4mIlzr1U8u9GBrG-X7tK7zKk-CZlWMYPhmJ7IUC1JyQRpzrgQinifWGqSUFQn-X2x2jg8WwGh9xuTzvPOgOZzg0QyYPpoAxJdm8cmPPmp1yZ-5sQvSczTnzJ-6njGQDqQDF4J9azhrb_xWx8lO5cFec8nXeqbb2E3Q9lFU8zcm3fgVmkcq17PAp7X"
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
                  Dawit Gebremichael Habte is a writer and historian dedicated
                  to unearthing the narratives of resilience within the Eritrean
                  diaspora.
                </p>
                <p className={styles.bodyText}>
                  Through extensive archival research and deeply personal
                  storytelling, he connects the visceral realities of the past
                  with the blossoming hopes of the present.{" "}
                  <em>Roots of Grace</em> is his definitive work on family,
                  memory, and survival.
                </p>
                <a className={styles.inlineLink} href="#purchase">
                  Read Full Bio <span aria-hidden="true">→</span>
                </a>
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
                  href="mailto:publisher@rootsofgrace.com"
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
            <a href="mailto:publisher@rootsofgrace.com">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
