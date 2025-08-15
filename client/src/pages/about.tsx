import type {ReactNode} from 'react';
import Layout from '@theme/Layout';


function AboutpageHeader(): ReactNode {
  return (
    <div className="shadow--lw" style={{ height: '25rem' }}>
      <div>
        <br/><br/><br/><br/>
      </div>
      <div className="container">
        <h1 className="hero__title text--primary text--center">人工智能与机器人学院</h1>
        <h1 className="hero__title text--success maple text--center">桃子湖工作站</h1>
      </div>
    </div>
  );
}

function AboutpageMidder(): ReactNode {
  return (
    <div className="container">
      本项目由机器人学院<a className="button button--link" href="https://github.com/TZLakeStudio">桃子湖工作站</a>维护
    </div>
  );
}

export default function About(): ReactNode {
  return (
    <Layout>
      <AboutpageHeader/>
      <AboutpageMidder/>
    </Layout>
  );
}
