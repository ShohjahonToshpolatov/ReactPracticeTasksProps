function TeacherCard({ name, subject, experience, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} width="150" />
      <h2>{name}</h2>
      <p>Subject: {subject}</p>
      <p>Experience: {experience}</p>
    </div>
  );
}

export default TeacherCard;
