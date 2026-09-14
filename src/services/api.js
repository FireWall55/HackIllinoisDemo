const BASE_URL = "https://adonix.hackillinois.org";


export async function getEvents() {
  const response = await fetch(`${BASE_URL}/event/`);

  if (!response.ok) {
    throw new Error(`Failed to fetch events (status ${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.events;
}



export async function getJudges() {
  const response = await fetch(`${BASE_URL}/judge/info`);

  if (!response.ok) {
    throw new Error(`Failed to fetch judges (status ${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.judges;
}

export async function getMentors() {
  const response = await fetch(`${BASE_URL}/mentor/info`);

  if (!response.ok) {
    throw new Error(`Failed to fetch mentors (status ${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.mentors;
}

export async function getShopItems() {
  const response = await fetch(`${BASE_URL}/shop`);

  if (!response.ok) {
    throw new Error(`Failed to fetch shop items (status ${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data : data.items;
}