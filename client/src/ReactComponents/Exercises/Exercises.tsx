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
  repetitions: number;
  weight: number;
  volume: number;
  progress: number;
};

const Exercises: FunctionComponent<ExercisesProps> = ({
  title,
  username,
  hideList,
}) => {
  const [exerciseData, setExerciseData] = useState<dataType[]>([]);
  const [exerciseModal, setExerciseModal] = useState<boolean>(false);

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
        if (data.msg) {
          setExerciseData(data.msg);
        } else {
          setExerciseData([]);
        }
      });
  };

  const addExerciseToDatabase = async (form: HTMLFormElement | null) => {
    if (!form) {
      alert("Error while adding exercise to database !");
      return;
    }
    const formData = new FormData(form);
    formData.append("plan", title);
    formData.append("username", username);
    formData.append("progress", "0");

    await fetch("http://localhost/trainingTracker/server/src/ADDExercise.php", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg) {
          alert("Exercise added properly");
          getExercisesFromDatabase();
        } else {
          alert("Error while adding to database !");
        }
      });
  };

  useEffect(() => {
    getExercisesFromDatabase();
    console.log(exerciseData);
  }, []);

  return (
    <>
      <main className="PanelContainer">
        {exerciseModal && (
          <ExerciseModal
            exerciseModal={exerciseModal}
            hideExerciseModal={() => setExerciseModal(false)}
            addExercise={addExerciseToDatabase}
          />
        )}
        <div className="ExercisesContainer d-flex justify-content-center">
          <ul>
            {exerciseData.length > 0 &&
              exerciseData.map((item) => (
                <ExerciseItem
                  key={item.id}
                  title={item.name}
                  sets={item.sets}
                  repetitions={item.repetitions}
                  weight={item.weight}
                  volume={item.volume}
                  progress={item.progress}
                />
              ))}

            <li
              onClick={() => setExerciseModal(true)}
              className="ExeciseItem addButton"
            >
              <label>+</label>
            </li>
          </ul>
          <button onClick={hideList}>Return</button>
        </div>
      </main>
    </>
  );
};

export { Exercises };
