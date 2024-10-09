"use client";

import TimelineItem from "../atoms/TimelineItem";
import styles from "./Timeline.module.css";

interface TimelineData {
  datas: Data[];
}

interface Data {
  number: number;
  title: string;
  description: string;
}

const Timeline: React.FC<TimelineData> = ({ datas }) => {
  return (
    <div className={styles.timeline}>
      {datas.map((data) => (
        <TimelineItem
          key={data.number}
          number={data.number}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default Timeline;
