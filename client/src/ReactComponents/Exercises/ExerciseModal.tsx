import type { FunctionComponent } from "preact";
import { useRef } from "preact/hooks";
import "./ExerciseModal.css";

interface ExerciseModalProps {
  exerciseModal: boolean;
  hideExerciseModal: () => void;
  addExercise: (form: HTMLFormElement | null) => void;
}

const ExerciseModal: FunctionComponent<ExerciseModalProps> = ({
  exerciseModal,
  hideExerciseModal,
  addExercise,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div
      className={
        exerciseModal
          ? "modal-shown modal-wrapper d-flex justify-content-center align-items-center"
          : "modal-hidden modal-wrapper d-flex justify-content-center align-items-center"
      }
    >
      <div className="modal-content">
        <div className="modal-bar d-flex justify-content-end align-items-center">
          <button onClick={hideExerciseModal}>X</button>
        </div>
        <form
          ref={formRef}
          onSubmit={(e: Event) => {
            e.preventDefault();
            addExercise(formRef.current ? formRef.current : null);
          }}
          className="modal-form d-flex flex-column align-items-center justify-content-center"
        >
          <input name="name" placeholder="Exercise Name" />
          <input type="number" min={1} name="sets" placeholder="Sets" />
          <input type="number" min={1} name="reps" placeholder="Reps" />
          <input type="number" min={1} name="weight" placeholder="Weight" />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export { ExerciseModal };
