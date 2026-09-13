import { formatTime } from "../utils/formatTime.js";

function EventCard({ event }) {
  const location = event.locations?.[0]?.description;

  return (
    <div className="event-card">
      <div className="event-card-time">
        {formatTime(event.startTime)} – {formatTime(event.endTime)}
      </div>

      <div className="event-card-body">
        <div className="event-card-header">
          <h3 className="event-card-name">{event.name}</h3>
          <span className="event-card-type">{event.eventType}</span>
        </div>

        {location && <p className="event-card-location"> {location}</p>}

        {event.description && (
          <p className="event-card-description">{event.description}</p>
        )}

        {event.sponsor && (
          <p className="event-card-sponsor">Sponsored by {event.sponsor}</p>
        )}
      </div>
    </div>
  );
}

export default EventCard;
