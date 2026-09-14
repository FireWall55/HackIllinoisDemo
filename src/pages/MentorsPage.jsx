import { useState, useEffect } from "react";
import { getMentors } from "../services/api.js";
import OceanBackground from "../components/OceanBackground.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import "../components/ProfileCard.css";

function MentorsPage() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMentors()
      .then((data) => {
        setMentors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page theme-kelp">
        <OceanBackground variant="kelp" />
        <div className="page-content">
          <div className="profiles-status">Loading mentors...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page theme-kelp">
        <OceanBackground variant="kelp" />
        <div className="page-content">
          <div className="profiles-status">Couldn&apos;t load mentors: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page theme-kelp">
      <OceanBackground variant="kelp" />
      <div className="page-content">
        <h1 className="profiles-title">Mentors</h1>
        <div className="profiles-grid">
          {mentors.map((mentor) => (
            <ProfileCard key={mentor._id} person={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MentorsPage;