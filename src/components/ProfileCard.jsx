function ProfileCard({ person }) {
  return (
    <div className="profile-card">
      <img
        className="profile-card-image"
        src={person.imageUrl}
        alt={person.name}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/200?text=No+Photo";
        }}
      />
      <div className="profile-card-body">
        <h3 className="profile-card-name">{person.name}</h3>
        <p className="profile-card-description">{person.description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;