import CalendarCore from "./calendar";
import clsx from "clsx";
import styles from "./index.module.scss";
import { useState } from "react";

export default function Calendar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCalendar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleCalendar}>
        {isCollapsed ? "Expand Calendar" : "Collapse Calendar"}
      </button>
      <CalendarCore
        className={clsx(styles.customCalendar, {
          [styles.collapsed]: isCollapsed,
          [styles.calendarExpanded]: !isCollapsed,
        })}
        events={[
          { title: "Test Event 1 - This is..", date: "2024-10-01" },
          { title: "Event 2", date: "2024-10-07" },
          { title: "Event 3", date: "2024-10-07" },
        ]}
        isCollapsed={isCollapsed}
      />
    </>
  );
}
