import { formatTime } from "../utils/formatTime.js";

function EventModal({ event, onClose }) {
  const location = event.locations?.[0]?.description;

  return (
    <div className="event-modal-backdrop" onClick={onClose}>
      <div className="event-modal" onClick={(e) => e.stopPropagation()}>
        <button className="event-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h2 className="event-modal-title">{event.name}</h2>
        <p className="event-modal-time">
          {formatTime(event.startTime)} – {formatTime(event.endTime)}
        </p>
        {location && (
          <p className="event-modal-location">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
              <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>{" "}
            {location}
          </p>
        )}

        {event.mapImageUrl ? (
          <img
            className="event-modal-map"
            src={event.mapImageUrl}
            alt={`Map showing ${location || "event location"}`}
          />
        ) : (
          <p className="event-modal-no-map">No map available for this event.</p>
        )}
      </div>
    </div>
  );
}

export default EventModal;