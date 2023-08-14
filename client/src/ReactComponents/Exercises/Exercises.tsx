import type { FunctionComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import "./Exercises.css";
import { ExerciseItem } from "./ExerciseItem";

interface ExercisesProps {
  title: string;
  username: string;
}

type dataType = {
  name: string;
  username?: string;
  plan?: string;
  sets: number;
  reps: number;
  weight: number;
  volume: number;
  progress: number;
};

const Exercises: FunctionComponent<ExercisesProps> = ({ title, username }) => {
  const [exerciseData, setExerciseData] = useState([]);
  const getExercisesFromDatabase = async () => {
    const formData = new FormData();
    formData.append("plan", title);
    formData.append("username", username);
    await fetch(
      "http://localhost/trainingTracker/server/src/getExercises.php",
      {
        method: "post",
        mode: "cors",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.msg);
        setExerciseData(data.msg);
      });
  };

  useEffect(() => {
    getExercisesFromDatabase();
  }, []);

  return (
    <main className="PanelContainer">
      <div className="ExercisesContainer d-flex justify-content-center">
        <ul>
          {(exerciseData as dataType[]).map((item) => (
            <ExerciseItem
              title={item.name}
              sets={item.sets}
              reps={item.reps}
              weight={item.weight}
              volume={item.volume}
              progress={item.progress}
            />
          ))}
        </ul>
        <button>Return</button>
      </div>
    </main>
  );
};

export { Exercises };
