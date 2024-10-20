import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function CalendarCore() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "Event 1", date: "2024-06-01" },
        { title: "Event 2", date: "2024-06-07" },
      ]}
    />
  );
}
