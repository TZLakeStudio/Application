import {ReactNode} from "react";
import AnalogClock from "@site/src/components/HomepageFeatures/AnalogClock"
import DigitalClock from "@site/src/components/HomepageFeatures/DigitalClock";
import CountDown from "@site/src/components/HomepageFeatures/CountDown";
import styles from './styles.module.css'


type FeatureItem = {
  title: string | ReactNode;
  description: string | ReactNode;
  url?: string;
}


const FeatureList: FeatureItem[] = [
  {
    title: "入学",
    description: <span>新生报到全攻略: <br/>从录取到入住一站式指南! <br/>助你顺利开启湖大生活！</span>,
    url: "/docs/start",
  },
  {
    title: "生活",
    description: <span>快乐生活每一天！<br/>囊括了娱乐饮食出行等各方面的生活密码！</span>,
    url: "/docs/life",
  },
  {
    title: "学业",
    description: <span>学业有困惑?<br/>一键get官方咨询和学长学姐珍藏经验！</span>,
    url: "/docs/study",
  },
  {
    title: "毕业",
    description:  <span>生涯规划有困难？ <br/>优秀毕业生分享从保研、留学、工作全经验！</span>,
    url: "/docs/graduate",
  },
  {
    title: "跃鹿战队",
    description: "加入湖南大学跃鹿战队, 征战全国大学生机器人大赛, 成就优秀青年工程师",
    url: "/docs/study/RM"
  },
  {
    title: <DigitalClock/>,
    description: <AnalogClock/>
  },
  {
    title: "开学倒计时",
    description: <>24级: <CountDown target={"2025-09-22"}/><br/>25级: <CountDown target={"2025-09-09"}/></>,
  },
];


function Feature({title, description, url}: FeatureItem): ReactNode {
  return (
    <div className="col col--3">
      <div className="card shadow--md margin-top--lg">
        <div className="card__header">
          <h3 className="text--center">{title}</h3>
        </div>
        <div className="card__body">
          <p className="text--center">{description}</p>
        </div>
        { url && (
          <div className="card__footer">
            <a className={`button button--primary button--block ${styles.button}`} href={url}>
              <span className={`text--secondary ${styles.buttonContent}`}>
                <i className={`fa-solid fa-arrow-right ${styles.icon}`}></i>
                <span className={styles.text}>点击跳转</span>
              </span>
              <span className={`text--secondary ${styles.url}`}>{url}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}


export default function HomepageFeatures(): ReactNode {
  return (
    <div className="container margin-bottom--lg">
      <div className="row">
        { FeatureList.map((props, index) => (
          <Feature key={index} {...props} />
        )) }
      </div>
    </div>
  );
}
