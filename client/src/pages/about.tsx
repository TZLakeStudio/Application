import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="hero shadow--lw" style={{ height: '25rem' }}>
      <div className="container">
        <h1 className="hero__title text--primary">机器人学院</h1>
        <h1 className="hero__title text--success maple">桃子湖工作站</h1>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader/>
    </Layout>
  );
}
