import React from "react";
import "./panelContainer.css";
import { PanelButton, buttonTypes } from "./panelButton";

const PanelContainer = () => {
  return (
    <main className="PanelContainer d-flex justify-content-evenly align-content-center">
      <PanelButton type={buttonTypes.ADD} />
    </main>
  );
};

export { PanelContainer };
