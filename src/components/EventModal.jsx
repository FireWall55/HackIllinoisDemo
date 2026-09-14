import { formatTime } from "../utils/formatTime.js";

function EventModal({ event, onClose }) {
  const location = event.locations?.[0]?.description;

  // Clicking the dark backdrop closes the modal; clicking the card itself doesn't
  // (otherwise every click inside the modal would close it).
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
        {location && <p className="event-modal-location">📍 {location}</p>}

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