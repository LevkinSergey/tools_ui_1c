import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
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
            to="/docs/instruments/overview">
            Обзор инструментов 🚀
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/development/contributing"
            style={{marginLeft: '10px'}}>
            Внести вклад 💻
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Главная`}
      description="Документация для проекта Универсальные инструменты 1С">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

function HomepageFeatures(): JSX.Element {
  const features = [
    {
      title: '30+ инструментов',
      description: (
        <>
          Полный набор инструментов для разработки, администрирования и отладки конфигураций 1С.
        </>
      ),
    },
    {
      title: 'Интеграция с БСП',
      description: (
        <>
          Встраивание в Библиотеку стандартных подсистем, подключаемые команды в формы и списки.
        </>
      ),
    },
    {
      title: 'Открытый код',
      description: (
        <>
          Лицензия GNU GPL v3.0. Изучайте, модифицируйте, распространяйте.
        </>
      ),
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

interface FeatureItem {
  title: string;
  description: JSX.Element;
}
