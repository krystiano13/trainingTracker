import React from "react";
import "./panelModal.css";

const PanelModal = () => {
  return (
    <div className="modal-wrapper d-flex justify-content-center align-items-center">
      <div className="modal-content">
        <div className="modal-bar d-flex justify-content-end align-items-center">
          <button>X</button>
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
