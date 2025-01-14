import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import WhatIsAgentico from "./_agentico.mdx";

import styles from './index.module.css';
import CookieSettingsButton from '../components/CookieSettingsButton';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Agentico Tutorial <img src="/img/favicon.ico" alt="Agentico Logo" width={20} height={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Where AI agents meets simplicity`}
      description="Agentico is a platform for building AI agents in a simple and efficient way">
      {/* <CookieSettingsButton /> */}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <WhatIsAgentico />
      </main>
    </Layout>
  );
}
