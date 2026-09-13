import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-title">HackIllinois</h1>
      <p className="home-subtitle">
        A 36-hour hackathon at the University of Illinois Urbana-Champaign.
      </p>

      <div className="home-blocks">
        <div className="home-block">
          <h2>What is HackIllinois?</h2>
          <p>
            Placeholder description of the event, what it is, and who it&apos;s
            for. Replace with real copy later.
          </p>
        </div>
        <div className="home-block">
          <h2>Who can attend?</h2>
          <p>
            Placeholder description of eligibility and registration details.
          </p>
        </div>
        <div className="home-block">
          <h2>What can you build?</h2>
          <p>
            Placeholder description of tracks, prizes, and sponsor
            challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
