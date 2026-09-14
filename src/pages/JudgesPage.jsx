import { useState, useEffect } from "react";
import { getJudges } from "../services/api.js";
import JudgeCard from "../components/JudgeCard.jsx";
import "./JudgesPage.css";

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
    return <div className="judges-status">Loading judges...</div>;
  }

  if (error) {
    return (
      <div className="judges-status">Couldn&apos;t load judges: {error}</div>
    );
  }

  return (
    <div className="judges-page">
      <h1 className="judges-title">Mentors &amp; Judges</h1>

      <div className="judges-grid">
        {judges.map((judge) => (
          <JudgeCard key={judge._id} judge={judge} />
        ))}
      </div>
    </div>
  );
}

export default JudgesPage;