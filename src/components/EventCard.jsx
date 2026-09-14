import { formatTime } from "../utils/formatTime.js";

function EventCard({ event, onClick }) {
  const location = event.locations?.[0]?.description;

  return (
    <div className="event-card" onClick={onClick}>
      <div className="event-card-time">
        {formatTime(event.startTime)} – {formatTime(event.endTime)}
      </div>

      <div className="event-card-body">
        <div className="event-card-header">
          <h3 className="event-card-name">{event.name}</h3>
          <span className="event-card-type">{event.eventType}</span>
        </div>

        {location && (
          <p className="event-card-location">
            <PinIcon /> {location}
          </p>
        )}

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

function PinIcon() {
  return (
    <svg className="pin-icon" viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
      <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );
}

export default EventCard;