//converts from seconds to clock time
export function formatTime(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

//Makes it so the reader can understand the day
export function formatDayLabel(unixSeconds) {
  const date = new Date(unixSeconds * 1000);
  return date.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}
