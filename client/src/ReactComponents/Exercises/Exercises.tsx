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

export type dataType = {
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
  const [currentValues, setCurrentValues] = useState<dataType>();
  const [mode, setMode] = useState<"Update" | "Add">("Add");

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

  const addExerciseToDatabase = async (
    form: HTMLFormElement | null,
    type: "Update" | "Add",
    id?: number
  ) => {
    if (!form) {
      if (type === "Add") alert("Error while adding exercise to database !");
      else alert("Error while updating exercise !");
      return;
    }
    const formData = new FormData(form);
    formData.append("plan", title);
    formData.append("username", username);
    formData.append("progress", "0");

    if (type === "Update" && id) {
      formData.append('id', id.toString());
    }

    await fetch(
      `http://localhost/trainingTracker/server/src/${type}Exercise.php`,
      {
        method: "post",
        body: formData,
      }
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
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
  }, []);

  return (
    <>
      <main className="PanelContainer">
        {exerciseModal && (
          <ExerciseModal
            exerciseModal={exerciseModal}
            hideExerciseModal={() => setExerciseModal(false)}
            addExercise={addExerciseToDatabase}
            mode={mode}
            values={currentValues as dataType}
          />
        )}
        <div className="ExercisesContainer d-flex justify-content-center">
          <ul>
            {exerciseData.length > 0 &&
              exerciseData.map((item) => (
                <ExerciseItem
                  key={item.id}
                  id={item.id}
                  plan={item.plan}
                  username={item.username}
                  title={item.name}
                  sets={item.sets}
                  repetitions={item.repetitions}
                  weight={item.weight}
                  volume={item.volume}
                  progress={item.progress}
                  openModal={(data: dataType) => {
                    setMode("Update");
                    setCurrentValues(data);
                    setExerciseModal(true);
                  }}
                />
              ))}

            <li
              onClick={() => {
                setMode("Add");
                setExerciseModal(true);
              }}
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
