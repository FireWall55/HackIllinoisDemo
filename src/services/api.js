const BASE_URL = "https://adonix.hackillinois.org";

/**
 * Fetches the full list of public events.
 * The API responds with { events: [...] }, so we unwrap that here
 * so every component that uses this just works with a plain array.
 */
export async function getEvents() {
  const response = await fetch(`${BASE_URL}/event/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch events (status ${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.events;
}

// TODO: confirm the real endpoint for this and swap it in here.
// The sample data you found is a bare array of { _id, name, description, imageUrl },
// which doesn't match adonix's usual response shape, so it may live on a different host.
const JUDGES_URL = `${BASE_URL}/mentor/judges/`;

export async function getJudges() {
  const response = await fetch(`${BASE_URL}/judge/info/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch judges (status ${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.judges;
}