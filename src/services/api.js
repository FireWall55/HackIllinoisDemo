//API gives back the list of events
export async function getEvents() {
  const response = await fetch(`https://adonix.hackillinois.org/event/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch events (status ${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.events;
}
