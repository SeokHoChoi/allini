import CalendarCore from "./calendar";
import clsx from "clsx";
import styles from "./index.module.scss";

export default function Calendar() {
  return (
    <CalendarCore
      className={clsx(styles.customCalendar)}
      events={[
        { title: "Event 1", date: "2024-06-01" },
        { title: "Event 2", date: "2024-06-07" },
      ]}
    />
  );
}
