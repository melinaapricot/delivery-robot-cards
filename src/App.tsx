import { useEffect, useState } from "react";
import "./App.css";
import { fetchRobotData } from "./data/robotDataProvider";
import type { RobotProps } from "./types/types";
import { RobotCard } from "./components/RobotCard/RobotCard";

function App() {
  const [robots, setRobots] = useState<RobotProps[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRobotData().then((data) => {
      setRobots(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <span className="loader"></span>;

  return (
    <>
      <div className="app">
        <section className="robot-list">
          {robots?.map((robot) => (
            <RobotCard key={robot.robotId} {...robot} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
