import CalendarCore from "./calendar";
import clsx from "clsx";
import styles from "./index.module.scss";

export default function Calendar() {
  return (
    <CalendarCore
      className={clsx(styles.customCalendar)}
      events={[
        { title: "Test Event 1 - This is..", date: "2024-10-01" },
        { title: "Event 2", date: "2024-10-07" },
        { title: "Event 3", date: "2024-10-07" },
      ]}
    />
  );
}
