import type { FunctionComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import "./Exercises.css";
import { ExerciseItem } from "./ExerciseItem";
import { ExerciseModal } from "./ExerciseModal";

interface ExercisesProps {
  title: string;
  username: string;
  hideList: () => void;
}

type dataType = {
  id: number;
  name: string;
  username?: string;
  plan?: string;
  sets: number;
  reps: number;
  weight: number;
  volume: number;
  progress: number;
};

const Exercises: FunctionComponent<ExercisesProps> = ({
  title,
  username,
  hideList,
}) => {
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseModal, setExerciseModal] = useState<boolean>(true);

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
    <>
      <main className="PanelContainer">
        {exerciseModal && (
          <ExerciseModal
            exerciseModal={exerciseModal}
            hideExerciseModal={() => setExerciseModal(false)}
          />
        )}
        <div className="ExercisesContainer d-flex justify-content-center">
          <ul>
            {(exerciseData as dataType[]).map((item) => (
              <ExerciseItem
                key={item.id}
                title={item.name}
                sets={item.sets}
                reps={item.reps}
                weight={item.weight}
                volume={item.volume}
                progress={item.progress}
              />
            ))}
          </ul>
          <button onClick={hideList}>Return</button>
        </div>
      </main>
    </>
  );
};

export { Exercises };
