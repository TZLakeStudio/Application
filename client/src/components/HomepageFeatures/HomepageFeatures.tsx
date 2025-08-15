import type {ReactNode} from 'react';
import styles from './styles.module.css'

type FeatureItem = {
  title: string;
  description: string;
  url: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: "入学",
    description: "新生报到全攻略: <br/>从录取到入住一站式指南! <br/>助你顺利开启湖大生活！",
    url: "./docs/start",
  },
  {
    title: "生活",
    description: "生活描述文本.",
    url: "./docs/life",
  },
  {
    title: "学业",
    description: "学业描述文本.",
    url: "./docs/study",
  },
  {
    title: "毕业",
    description: "毕业描述文本.",
    url: "./docs/graduate",
  },
  {
    title: "跃鹿战队",
    description: "加入湖南大学跃鹿战队, 征战全国大学生机器人大赛, 成就优秀青年工程师",
    url: "./docs/study/跃鹿战队"
  }
];

function Feature({title, description, url}: FeatureItem): ReactNode {
  return (
    <div className="col col--3">
      <div className="card shadow--md margin-top--lg">
        <div className="card__header">
          <h3 className="text--center">{title}</h3>
        </div>
        <div className="card__body">
          <p
            className="text--center"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="card__footer">
          <a className={`button button--primary button--block ${styles.button}`} href={url}>
            <span className={`text--secondary ${styles.buttonContent}`}>
              <i className={`fa-solid fa-arrow-right ${styles.icon}`}></i>
              <span className={styles.text}>点击跳转</span>
            </span>
            <span className={`text--secondary ${styles.url}`}>{url.replace('./docs/', '')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div className="container margin-bottom--lg">
      <div className="row">
        { FeatureList.map((props, idx) => (
          <Feature key={ idx } { ...props } />
        )) }
      </div>
    </div>
  );
}
