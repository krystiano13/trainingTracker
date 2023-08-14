import type { FunctionComponent } from "preact";
import './Exercises.css';

interface ExercisesProps {
  title: string;
  username: string;
}

const Exercises: FunctionComponent<ExercisesProps> = ({ title, username }) => {
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
        console.log(data);
      });
  };

  return (
    <main className="PanelContainer">
      <div className="ExercisesContainer">
              
      </div>
    </main>
  );
};

export { Exercises };
