import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import clsx from "clsx";
import { EventInput } from "@fullcalendar/core";
import { useEffect, useRef, useState } from "react";
import { VerboseFormattingArg } from "@fullcalendar/core/internal";

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

  const titleFormatter = (date: VerboseFormattingArg) => {
    const year = date.date.year;
    const month = date.date.month + 1; // 0부터 시작하므로 1을 더해줍니다.

    // dayGridWeek일 경우
    if (currentView === "dayGridWeek") {
      const start = date.start; // 시작 날짜
      const end = date.end; // 끝 날짜
      const startDate = `${start.year}.${String(start.month + 1).padStart(
        2,
        "0"
      )}.${String(start.day).padStart(2, "0")}`;
      const endDate = `${String(end?.day).padStart(2, "0")}`;
      return `${startDate} - ${endDate}`;
    } else {
      // dayGridWeek이 아닐 경우
      return `${year}.${String(month).padStart(2, "0")}`;
    }
  };

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
        height={isCollapsed ? "110px" : "auto"}
        locale="kr"
        titleFormat={titleFormatter}
      />
    </div>
  );
}
