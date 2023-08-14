import { useRef } from "preact/hooks";
import type { FunctionComponent } from "preact";
import "./panelModal.css";

interface ModalProps {
  modal: boolean;
  hideModal: () => void;
  sendToApi: (form: FormData) => Promise<void>;
}

const PanelModal: FunctionComponent<ModalProps> = ({
  modal,
  hideModal,
  sendToApi,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const formData = new FormData(formRef.current as HTMLFormElement);
    formData.append("username", localStorage.getItem("username") as string);

    sendToApi(formData);
    hideModal();
  };

  return (
    <div
      className={
        modal
          ? "modal-shown modal-wrapper d-flex justify-content-center align-items-center"
          : "modal-hidden modal-wrapper d-flex justify-content-center align-items-center"
      }
    >
      <div className="modal-content">
        <div className="modal-bar d-flex justify-content-end align-items-center">
          <button onClick={hideModal}>X</button>
        </div>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="modal-form d-flex flex-column align-items-center justify-content-center"
        >
          <input name="planTitle" placeholder="Training Plan Title" />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export { PanelModal };
