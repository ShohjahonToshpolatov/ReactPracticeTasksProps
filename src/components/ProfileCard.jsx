function ProfileCard({ name, image, job, city, isOnline }) {
  if (!isOnline) {
    return null;
  }

  return (
    <div className="card">
      <img src={image} alt={name} width="150" />
      <h2>{name}</h2>
      <p>Kasbi: {job}</p>
      <p>Shahri: {city}</p>
      <p>🟢 Online</p>
    </div>
  );
}

export default ProfileCard;
