import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import clsx from "clsx";
import { EventInput } from "@fullcalendar/core";
import { useEffect, useRef, useState } from "react";

interface CalendarCoreProps {
  events?: EventInput[];
  className?: string;
  isCollapsed: boolean;
}

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function CalendarCore({
  events = [],
  className = "",
  isCollapsed = false,
}: CalendarCoreProps) {
  const calendarRef = useRef<FullCalendar>(null);
  const [currentView, setCurrentView] = useState<
    "dayGridWeek" | "dayGridMonth"
  >("dayGridWeek");

  useEffect(() => {
    const newView = isCollapsed ? "dayGridWeek" : "dayGridMonth";
    setCurrentView(newView);

    setTimeout(() => {
      if (calendarRef.current) {
        calendarRef.current.getApi().changeView(newView);
      }
    }, 0);
  }, [isCollapsed]);

  return (
    <div className={clsx(className)}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView={currentView}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        events={events}
        dayCellContent={(arg) => {
          if (!isCollapsed) {
            return (
              <div className={"dayCell"}>
                {arg.dayNumberText.replace("일", "")}
              </div>
            );
          }
          return null;
        }}
        dayHeaderContent={(arg) => {
          if (isCollapsed) {
            const isToday = arg.isToday;
            return (
              <div className="custom-day-header">
                <div>{DAY_NAMES[arg.date.getDay()]}</div>
                <div className={clsx("dayCell", { today: isToday })}>
                  {arg.date.getDate()}
                </div>
              </div>
            );
          }
          return DAY_NAMES[arg.date.getDay()];
        }}
        dayMaxEventRows={isCollapsed ? 0 : 1}
        height={isCollapsed ? "200px" : "auto"}
        locale="kr"
      />
    </div>
  );
}
