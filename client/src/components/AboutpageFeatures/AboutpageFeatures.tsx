import {ReactNode} from "react";
import Timeline from "@site/src/components/AboutpageFeatures/Timeline";
import Credit from "@site/src/components/AboutpageFeatures/Credit";


type FeatureItem = {
  title: string | ReactNode;
  description: string | ReactNode;
}


const FeatureList: FeatureItem[] = [
  {
    title: "项目介绍",
    description: (
      <>
        <p>
          本<span className="badge badge--primary">学生手册</span>项目由21级学长<a href="https://github.com/roundly">Roundly</a>发起,
          并由<a href="https://github.com/TZLakeStudio">桃子湖工作站</a>负责维护,
          旨在打造一个"一站式的学生信息获取平台", 以便人工智能与机器人学院本科生高效获取各类资料, 提前做好学业与发展规划。
        </p>
        <p>
          目前, 项目划分为"入学", "生活", "学业", "毕业"四大模块, 面向全院学生开放投稿, 致力于为每一位同学提供参与和受益的机会.
          所有内容均由<span className="badge badge--primary maple">桃子湖工作站</span>严格审核, 以确保文档平台的高质量与稳定运行.
        </p>
      </>
    )
  },
  {
    title: "站长寄语",
    description: (
      <>
        <div className="card">
          <div className="card__body">
            <p>
              本人在2022年当学助的时候，与学长学姐们“取经”，获益良多。其中电气院19级韩月学姐在保研后，联系了本届大部分保研的同学，整理了一份《朋辈相伴
              推免经验分享帖》，这篇文档仅通过人传人传播，但对于我们机器人学院的学生来说，无疑是“雪中送炭”，我们从2020年开始有第一批本科生，到我们是第二届，前面的学长学姐蒙着眼睛过河，经历了许多坎坷；而我们也已经大三，事实上了解了保研的相关信息后，很多事情从刚入学就需要去规划的；在2023年的时候，偶然间我看到了上交自救手册，被其中升学就业模块--《上海交通大学大学飞跃手册》以及参考的《南方科技大学飞跃手册》所激励，决定也制作一份我们自己学院的经验积累。
            </p>
            <p>
              大一大二的时候，每学期的保研经验分享我都听，但是谁又能保证拍下来的照片或者记录下来的笔记后面会不会忘呢？本手册提供了所有参与分享的同学，他们的经历、准备内容，提供给大家。希望能帮助到学弟学妹，也希望机器人学院的本科保研情况越来越好！
            </p>
          </div>
          <div className="card__header text--right">
            <p>---- 本科2021级, SYG 2024.11.1</p>
          </div>
        </div>
        <div className="card margin-top--md">
          <div className="card__body">
            <p>
              学长在五月初发布招募信息后, 我立即加入团队, 并参与了网站的全新设计与运维规划工作.
            </p>
            <p>
              项目伊始, 学长仅计划整理"毕业去向"相关内容. 随着团队的不断深入探讨, 我们逐步抽象出多个子模块, 并与各年级工作组组长反复沟通, 最终确立了整合本科生从入学到毕业所需全部信息的目标, 提出了"一站式学生信息获取站点"的slogan. 后续与学院方面的沟通也十分顺利, 得到了彭书记与江老师的大力支持. 2025年小学期, 桃子湖工作站正式成立, 之后项目建设工作于暑期全面启动。
            </p>
            <p>
              "入学", "生活", "学业", "毕业"四大模块, 按照时间顺序梳理资料, 旨在构建一个全学院人人都能参与, 人人都能受益的文档平台. 今年的入学指南编辑工作已顺利完成, 文档站的持续建设也将成为长期目标, 我相信, 这个刚刚起步的项目必将焕发出持久的活力与无限的可能.
            </p>
            <p>
              关于组织的更多设想, 亦将在未来逐步付诸实践...
            </p>
          </div>
          <div className="card__header text--right">
            <p>---- 本科2024级, LMH 2025.8.19</p>
          </div>
        </div>
      </>
    )
  },
  {
    title: "项目历史",
    description: <Timeline/>
  },
  {
    title: "特别鸣谢",
    description: <Credit/>
  },
  {
    title: "加入我们",
    description: (
      <>
        <p>
          <span className="badge badge--primary maple">桃子湖工作站</span> 是湖南大学人工与机器人学院学生自己成立的一个IT组织,
          尚未转正.
          目前主要任务是进行本<span className="badge badge--primary">学生手册</span>网站的开发和运维工作.
        </p>
        <p>
          <span className="badge badge--primary">学生手册</span>&nbsp;
          项目由21级学长<a href="https://github.com/roundly">Roundly</a>创建,
          现由24级学生<a href="https://github.com/Twisuki">Twisuki</a>负责管理.
        </p>
        <p>
          欢迎联系我们前来投稿, Twisuki个人邮箱: <a href="mailto://twisuki@outlook.com">twisuki@outlook.com</a>
        </p>
        <p>
          如果你有一定的git基础, 也可以直接到我们的<a href="https://github.com/TZLakeStudio/Application">Github仓库</a>提交PR或issues.
        </p>
      </>
    )
  },
];


function Feature({ title, description }: FeatureItem): ReactNode {
  return (
    <div className="card margin-top--md">
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">{description}</div>
    </div>
  );
}


export default function AboutpageFeatures(): ReactNode {
  return (
    <div className="container">
      {FeatureList.map((props, index) => (
        <Feature key={index} {...props}/>
      ))}
    </div>
  );
}
