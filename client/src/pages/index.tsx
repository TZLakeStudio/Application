import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from "@site/src/components/HomepageFeatures/HomepageFeatures";


function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="hero shadow--lw" style={{ height: '25rem' }}>
      <div className="container">
        <h1 className="hero__title text--primary">机器人学院 <span className="text--success maple">学生手册</span></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <a className="button button--primary button--lg" href="/docs/start">开始阅读</a>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
