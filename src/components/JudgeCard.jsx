function JudgeCard({ judge }) {
  return (
    <div className="judge-card">
      <img
        className="judge-card-image"
        src={judge.imageUrl}
        alt={judge.name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200?text=No+Photo";
        }}
      />
      <div className="judge-card-body">
        <h3 className="judge-card-name">{judge.name}</h3>
        <p className="judge-card-description">{judge.description}</p>
      </div>
    </div>
  );
}

export default JudgeCard;