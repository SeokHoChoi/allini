import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import clsx from "clsx";
import { EventInput } from "@fullcalendar/core";

interface CalendarCoreProps {
  events?: EventInput[];
  className?: string;
}

export default function CalendarCore({
  events = [],
  className = "",
}: CalendarCoreProps) {
  return (
    <div className={clsx(className)}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        events={events}
        dayCellContent={(arg) => {
          return (
            <div className={"dayCell"}>
              {arg.dayNumberText.replace("일", "")}
            </div>
          );
        }}
        dayMaxEventRows={1}
        height="auto"
        locale="kr"
      />
    </div>
  );
}
