function DayTabs({ days, selectedDayIndex, onSelectDay }) {
  return (
    <div className="day-tabs">
      {days.map((day, index) => (
        <button
          key={day.dateKey}
          className={`day-tab ${index === selectedDayIndex ? "day-tab-active" : ""}`}
          onClick={() => onSelectDay(index)}
        >
          {day.label}
        </button>
      ))}
    </div>
  );
}

export default DayTabs;
