import { formatDayLabel } from "./formatTime.js";

//groups events by day and sorts them by start time
export function groupEventsByDay(events) {
  const groups = {};

  events.forEach((event) => {
    const date = new Date(event.startTime * 1000);
    const dateKey = date.toDateString(); // e.g. "Fri Feb 27 2026" - stable grouping key

    if (!groups[dateKey]) {
      groups[dateKey] = {
        dateKey,
        label: formatDayLabel(event.startTime),
        events: [],
      };
    }

    groups[dateKey].events.push(event);
  });

  const days = Object.values(groups);

  days.forEach((day) => {
    day.events.sort((a, b) => a.startTime - b.startTime);
  });

  days.sort((a, b) => a.events[0].startTime - b.events[0].startTime);

  return days;
}
