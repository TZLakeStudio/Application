import {ReactNode} from "react";


type TimelineItem = {
  date: string,
  description: string
}


const TimelineList: TimelineItem[] = [
  {
    date: "2024-7",
    description: "立项"
  },
  {
    date: "2024-11-1",
    description: "测试版上线"
  },
  {
    date: "2025-5-24",
    description: "Hope版主页上线"
  },
  {
    date: "2025-6-1",
    description: "docsify版老项目废弃"
  },
  {
    date: "2025-6-27",
    description: "Vue版本快速迭代"
  },
  {
    date: "2025-8-4",
    description: "React - Docusaurus版本立项"
  },
  {
    date: "2025-8-5",
    description: "入学指南编辑工作开始"
  },
  {
    date: "2025-8-17",
    description: "入学指南全部完成"
  }
];


export default function Timeline(): ReactNode {
  const formatDate = (dateStr: string): string => {
    if (dateStr.includes('-')) {
      const parts = dateStr.split('-');

      if (parts.length === 3) {
        const [year, month, day] = parts;
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      }

      if (parts.length === 2) {
        const [year, month] = parts;
        return `\u00A0\u00A0${year}-${month.padStart(2, '0')}\u00A0\u00A0\u00A0`;
      }
    }

    return dateStr;
  };

  return (
    <>
      {TimelineList.map((props, index) => (
        <p>
          <span className="badge badge--success">{formatDate(props.date)}</span> {props.description}
        </p>
      )) }
    </>
  )
}
