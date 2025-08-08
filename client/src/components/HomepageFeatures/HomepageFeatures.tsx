import type {ReactNode} from 'react';

type FeatureItem = {
  title: string;
  description: string;
  url: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: "入学",
    description: "入学描述文本.",
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
];

function Feature({title, description, url}: FeatureItem): ReactNode {
  return (
    <div className="col col--3">
      <div className="card">
        <div className="card__header">
          <h3 className="text--center">{title}</h3>
        </div>
        <div className="card__body">
          <p className="text--center">{description}</p>
        </div>
        <div className="card__footer">
          <a className="button button--info button--block" href={url}>
            <i className="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;&nbsp;点击跳转
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div className="container margin-vert--lg">
      <div className="row">
        { FeatureList.map((props, idx) => (
          <Feature key={ idx } { ...props } />
        )) }
      </div>
    </div>
  );
}
