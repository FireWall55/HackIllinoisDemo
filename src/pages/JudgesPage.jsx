import { useState, useEffect } from "react";
import { getJudges } from "../services/api.js";
import OceanBackground from "../components/OceanBackground.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import "../components/ProfileCard.css";

function JudgesPage() {
  const [judges, setJudges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJudges()
      .then((data) => {
        setJudges(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page theme-deep">
        <OceanBackground variant="deep" />
        <div className="page-content">
          <div className="profiles-status">Loading judges...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page theme-deep">
        <OceanBackground variant="deep" />
        <div className="page-content">
          <div className="profiles-status">Couldn&apos;t load judges: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page theme-deep">
      <OceanBackground variant="deep" />
      <div className="page-content">
        <h1 className="profiles-title">Judges</h1>
        <div className="profiles-grid">
          {judges.map((judge) => (
            <ProfileCard key={judge._id} person={judge} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default JudgesPage;