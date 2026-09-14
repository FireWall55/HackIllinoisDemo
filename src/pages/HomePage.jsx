import OceanBackground from "../components/OceanBackground.jsx";
import HamburgerHint from "../components/HamburgerHint.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="page theme-surface">
      <OceanBackground variant="surface" />
      <HamburgerHint />

      <section className="home-hero">
        <h1 className="home-title">HackIllinois</h1>
        <p className="home-tagline">
          Dive into 36 hours of building, learning, and shipping something
          real, alongside the rest of the University of Illinois
          Urbana-Champaign's hacker community.
        </p>
      </section>

      <div className="page-content home-content">
        <section className="home-section">
          <h2>What is HackIllinois?</h2>
          <p>
            HackIllinois is UIUC's student-run hackathon, built by students
            for students since 2014. Once a year, hundreds of hackers take
            over campus for a weekend to design, build, and demo a project
            from scratch — no matter how much or how little experience they
            walk in with.
          </p>
          <p>
            It isn't a competition in the traditional sense so much as a
            sprint: you show up Friday with an idea (or no idea at all), and
            by Sunday afternoon you're demoing something you built with your
            own hands, alongside a team you may have just met.
          </p>
        </section>

        <section className="home-section">
          <h2>Why hackers keep coming back</h2>
          <div className="home-cards">
            <div className="home-card">
              <WaveIcon />
              <h3>Learn by building</h3>
              <p>
                Workshops from sponsor engineers, hands-on tracks, and mentors
                on the floor all weekend to help you get unstuck.
              </p>
            </div>
            <div className="home-card">
              <FishIcon />
              <h3>Find your crew</h3>
              <p>
                Team matching sessions, an RSO expo, and shared workspaces
                make it easy to find people who care about the same things
                you do.
              </p>
            </div>
            <div className="home-card">
              <ShellIcon />
              <h3>Walk away with something</h3>
              <p>
                Every team leaves with a finished project, plus swag, meals,
                and prizes along the way.
              </p>
            </div>
          </div>
        </section>

        <section className="home-section">
          <h2>What a weekend looks like</h2>
          <ol className="home-timeline">
            <li>
              <span className="home-timeline-label">Friday</span>
              Check-in, opening ceremony, and team matching for anyone still
              looking for a group.
            </li>
            <li>
              <span className="home-timeline-label">Overnight</span>
              Sponsor track kickoffs, workshops, and quiet spaces for anyone
              who wants to keep building through the night.
            </li>
            <li>
              <span className="home-timeline-label">Saturday</span>
              A full day of building, talks, mini-events, and meals to keep
              the momentum going.
            </li>
            <li>
              <span className="home-timeline-label">Sunday</span>
              Submissions close, projects get judged, and the weekend wraps
              with a closing ceremony.
            </li>
          </ol>
        </section>

        <section className="home-section home-cta">
          <h2>Ready to explore?</h2>
          <p>
            Use the menu in the top right to check out the full event
            schedule, meet this year's mentors and judges, or browse the
            point shop.
          </p>
        </section>
      </div>
    </div>
  );
}

function WaveIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M2 18c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FishIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
      <path d="M4 14q9-8 18 0-9 8-18 0Z" />
      <path d="M22 14l4-5v10l-4-5Z" />
    </svg>
  );
}

function ShellIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
      <path d="M14 3c6 0 10 6 10 12 0 3-1 6-3 8H7c-2-2-3-5-3-8C4 9 8 3 14 3Z" />
    </svg>
  );
}

export default HomePage;