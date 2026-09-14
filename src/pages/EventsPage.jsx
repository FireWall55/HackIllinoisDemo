import { useState, useEffect, useMemo } from "react";
import { getEvents } from "../services/api.js";
import { groupEventsByDay } from "../utils/groupEventsByDay.js";
import DayTabs from "../components/DayTabs.jsx";
import EventCard from "../components/EventCard.jsx";
import EventModal from "../components/EventModal.jsx";
import "./EventsPage.css";
import "../components/EventModal.css";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // useMemo to lower computational costs
  const days = useMemo(() => groupEventsByDay(events), [events]);
  const selectedDay = days[selectedDayIndex];

  if (loading) {
    return <div className="events-status">Loading schedule...</div>;
  }

  if (error) {
    return (
      <div className="events-status">Couldn&apos;t load the schedule: {error}</div>
    );
  }

  return (
    <div className="events-page">
      <h1 className="events-title">Event Schedule</h1>

      <DayTabs
        days={days}
        selectedDayIndex={selectedDayIndex}
        onSelectDay={setSelectedDayIndex}
      />

      <div className="event-list">
        {selectedDay?.events.length ? (
          selectedDay.events.map((event) => (
            <EventCard
              key={event.eventId}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))
        ) : (
          <p className="events-empty">No events scheduled for this day.</p>
        )}
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

export default EventsPage;