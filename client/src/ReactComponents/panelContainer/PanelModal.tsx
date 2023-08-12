import type React from "react";
import "./panelModal.css";

interface ModalProps {
    modal: boolean;
    hideModal: () => void
}

const PanelModal: React.FC<ModalProps> = ({ modal, hideModal }) => {
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
        <form className="modal-form d-flex flex-column align-items-center justify-content-center">
          <input placeholder="Training Plan Title" />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export { PanelModal };
