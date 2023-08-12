import React from "react";
import "./panelContainer.css";
import { PanelButton, buttonTypes } from "./panelButton";
import { PanelModal } from "./PanelModal";

const PanelContainer = () => {
  const [modal, setModal] = React.useState<boolean>(true);
  return (
    <main className="PanelContainer d-flex justify-content-evenly align-items-center">
      {modal && <PanelModal />}
      <PanelButton type={buttonTypes.ADD} />
    </main>
  );
};

export { PanelContainer };
