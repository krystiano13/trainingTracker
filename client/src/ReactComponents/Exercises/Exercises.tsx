import type { FunctionComponent } from "preact";

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
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

    return <main className="PanelContainer">
        <h1>Test</h1>
      <button className="mt-9" onClick={getExercisesFromDatabase}>Test Api</button>
  </main>;
};

export { Exercises };
