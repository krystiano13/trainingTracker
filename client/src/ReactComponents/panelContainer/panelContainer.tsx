import React from "react";
import "./panelContainer.css";
import { PanelButton, buttonTypes } from "./panelButton";
import { PanelModal } from "./PanelModal";

const PanelContainer = () => {
  const [modal, setModal] = React.useState<boolean>(false);
  return (
    <main className="PanelContainer d-flex justify-content-evenly align-items-center">
      <PanelModal modal={modal} hideModal={() => setModal(false)} />
      <PanelButton show={() => {
        setModal(true);
      }} type={buttonTypes.ADD} />
    </main>
  );
};

export { PanelContainer };
