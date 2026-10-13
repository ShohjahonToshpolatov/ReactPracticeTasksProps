import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  return (
    <div>
      <StudentCard name="Ali" age={21} city="Tashkent" />
      <StudentCard name="Alisher" age={24} city="Buxoro" />
      <StudentCard name="Alibek" age={14} city="Samarqand" />
    </div>
  );
}

export default App;
