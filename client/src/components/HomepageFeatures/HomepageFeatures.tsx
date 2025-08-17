import {ReactNode, useState, useEffect} from "react";
import styles from './styles.module.css'

type FeatureItem = {
  title: string | ReactNode;
  description: ReactNode;
  url: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: "入学",
    description: <span>新生报到全攻略: <br/>从录取到入住一站式指南! <br/>助你顺利开启湖大生活！</span>,
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
    description: <>加入湖南大学跃鹿战队, 征战全国大学生机器人大赛, 成就优秀青年工程师</>,
    url: "./docs/study/跃鹿战队"
  },
  {
    title: <DigitalClock/>,
    description: <AnalogClock/>,
    url: "."
  },
  {
    title: "开学倒计时",
    description: <>24级: <CountDown target={"2025-09-22"}/><br/>25级: <CountDown target={"2025-09-09"}/></>,
    url: "."
  },
];


function AnalogClock(): ReactNode {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secAngle = sec * 6;
  const minAngle = min * 6 + sec * 0.1;
  const hourAngle = ((hour % 12) * 30) + (min * 0.5);

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="56" fill="#fff" stroke="#333" strokeWidth="4"/>
      <line
        x1="60" y1="60"
        x2="60" y2="32"
        stroke="#333"
        strokeWidth="6"
        strokeLinecap="round"
        transform={`rotate(${hourAngle} 60 60)`}
      />
      <line
        x1="60" y1="60"
        x2="60" y2="20"
        stroke="#666"
        strokeWidth="4"
        strokeLinecap="round"
        transform={`rotate(${minAngle} 60 60)`}
      />
      <line
        x1="60" y1="60"
        x2="60" y2="12"
        stroke="#e33"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${secAngle} 60 60)`}
      />
      <circle cx="60" cy="60" r="4" fill="#333"/>
    </svg>
  );
}

function DigitalClock(): ReactNode {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="badge badge--info">
      {now.toLocaleTimeString()}
    </span>
  );
}


function CountDown(props: { target: string }): ReactNode {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0
  });

  useEffect(() => {
    const target = new Date(props.target).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [props.target]);

  return (
    <span className="badge badge--success">
      {timeLeft.days}d {timeLeft.hours}h
    </span>
  );
}


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
