import type { FunctionComponent } from 'preact';

export enum buttonTypes {
  ADD,
  SHOW,
}

interface PanelButtonProps {
  type: buttonTypes;
  show: () => void;
  children?: string
}

const PanelButton:FunctionComponent<PanelButtonProps> = ({ type, show, children }) => {
  return (
    <button onClick={() => show()} className="PanelButton">
      {type === buttonTypes.ADD && <span>+</span>}
      {type === buttonTypes.SHOW && <label>{ children }</label>}
    </button>
  );
};

export { PanelButton };
