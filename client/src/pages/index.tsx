import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from "@site/src/components/HomepageFeatures/HomepageFeatures";
import styles from './index.module.css';


function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="container">
      <div className={`hero shadow--lw ${styles.header}`}>
        <h1 className={`text--primary ${styles.title}`}>
            人工智能与机器人学院 <span className={`text--success maple ${styles.maple}`}>学生手册</span>
        </h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttonGroup}>
          <a className="button button--primary button--lg" href="/docs/start">开始阅读</a>
          <a className="button button--secondary button--lg" href="/about">加入我们</a>
        </div>
      </div>
    </div>
  );
}


export default function Home(): ReactNode {
  return (
    <Layout
      title="首页 | 机器人学院学生手册"
      description="一站式的学生信息获取站点">
      <HomepageHeader/>
      <HomepageFeatures/>
    </Layout>
  );
}
