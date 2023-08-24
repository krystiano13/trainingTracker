import type { FunctionComponent } from "preact";
import type { dataType } from "./Exercises";
import { useEffect, useRef, useState } from "preact/hooks";
import "./ExerciseModal.css";

interface ExerciseModalProps {
  exerciseModal: boolean;
  hideExerciseModal: () => void;
  addExercise: (
    form: HTMLFormElement | null,
    type: "Update" | "Add",
    id?: number
  ) => void;
  mode: "Update" | "Add";
  values: dataType;
}

const ExerciseModal: FunctionComponent<ExerciseModalProps> = ({
  exerciseModal,
  hideExerciseModal,
  addExercise,
  mode,
  values,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [defaultValue, setDefaultValue] = useState<dataType | undefined>(
    undefined
  );

  useEffect(() => {
    if (mode === "Add") {
      setDefaultValue(undefined);
    } else setDefaultValue(values);

    if (mode === "Update") {
      (formRef.current?.children[0] as HTMLInputElement).value = values.name;
      (formRef.current?.children[1] as HTMLInputElement).value =
        values.sets.toString();
      (formRef.current?.children[2] as HTMLInputElement).value =
        values.repetitions.toString();
      (formRef.current?.children[3] as HTMLInputElement).value =
        values.weight.toString();
    }
  }, [exerciseModal]);

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
            if (mode === "Update") {
              addExercise(
                formRef.current ? formRef.current : null,
                mode,
                values.id
              );
            } else {
              addExercise(formRef.current ? formRef.current : null, mode);
            }
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
