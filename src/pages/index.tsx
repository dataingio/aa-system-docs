import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading> */}
        <div className={styles.heroArt}>
          <div className={styles.heroArtAa}>
            Aa
          </div>
          <div className={styles.heroArtSystemDocs}>
            <div className={styles.heroArtSystem}>
              System
            </div>
            <div className="hero_art_docs">
              Docs
            </div>
          </div>
        </div>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs"
          >
            🅰️ Get Started 🎨
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={``}
      description={`${siteConfig.tagline}`}
    >
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
