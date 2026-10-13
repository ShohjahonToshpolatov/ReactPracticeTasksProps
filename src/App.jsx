import StudentCard from "./components/StudentCard";
import TeacherCard from "./components/TeacherCard";
import ProfileCard from "./components/ProfileCard";

import "./App.css";

function App() {
  return (
    <div>
      <div>
        <StudentCard name="Ali" age={21} city="Tashkent" />
        <StudentCard name="Alisher" age={24} city="Buxoro" />
        <StudentCard name="Alibek" age={14} city="Samarqand" />
      </div>

      <div>
        <TeacherCard
          name="Akmal"
          subject="Matematika"
          experience={5}
          image="https://i.pravatar.cc/150?img=12"
        />

        <TeacherCard
          name="Dilnoza"
          subject="Ingliz tili"
          experience={8}
          image="https://i.pravatar.cc/150?img=47"
        />

        <TeacherCard
          name="Jasur"
          subject="Informatika"
          experience={3}
          image="https://i.pravatar.cc/150?img=14"
        />
      </div>

      <div>
        <ProfileCard
          name="Ali"
          image="https://i.pravatar.cc/150?img=11"
          job="Frontend Developer"
          city="Toshkent"
          isOnline={true}
        />

        <ProfileCard
          name="Vali"
          image="https://i.pravatar.cc/150?img=13"
          job="Designer"
          city="Guliston"
          isOnline={false}
        />

        <ProfileCard
          name="Sardor"
          image="https://i.pravatar.cc/150?img=15"
          job="Backend Developer"
          city="Samarqand"
          isOnline={true}
        />
      </div>
    </div>
  );
}

export default App;
