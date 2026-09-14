import { useState, useEffect, useMemo } from "react";
import { getEvents } from "../services/api.js";
import { groupEventsByDay } from "../utils/groupEventsByDay.js";
import OceanBackground from "../components/OceanBackground.jsx";
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

  const days = useMemo(() => groupEventsByDay(events), [events]);
  const selectedDay = days[selectedDayIndex];

  if (loading) {
    return (
      <div className="page theme-reef">
        <OceanBackground variant="reef" />
        <div className="page-content">
          <div className="events-status">Loading schedule...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page theme-reef">
        <OceanBackground variant="reef" />
        <div className="page-content">
          <div className="events-status">Couldn&apos;t load the schedule: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page theme-reef">
      <OceanBackground variant="reef" />
      <div className="page-content">
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
    </div>
  );
}

export default EventsPage;