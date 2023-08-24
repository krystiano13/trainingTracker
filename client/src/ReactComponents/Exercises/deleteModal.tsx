import type { FunctionComponent } from "preact";
import "./ExerciseModal.css";

interface DeleteProps {
  deleteModal: boolean;
  hide: () => void;
  currentId: number | undefined;
  deleteEx: (id: number | undefined) => void;
}

const DeleteModal: FunctionComponent<DeleteProps> = ({
  deleteModal,
  hide,
  currentId,
  deleteEx,
}) => {
  return (
    <div
      className={
        deleteModal
          ? "modal-shown modal-wrapper d-flex justify-content-center align-items-center"
          : "modal-hidden modal-wrapper d-flex justify-content-center align-items-center"
      }
    >
      <div className="modal-content">
        <div className="modal-bar d-flex justify-content-end align-items-center">
          <button onClick={hide}>X</button>
        </div>
        <form className="modal-form d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-white">Are you sure ?</h2>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              deleteEx(currentId);
            }}
          >
            Yes
          </button>
        </form>
      </div>
    </div>
  );
};

export { DeleteModal };
