export enum buttonTypes {
  ADD,
  SHOW,
}

interface PanelButtonProps {
  type: buttonTypes;
  show: () => void;
}

const PanelButton: React.FC<PanelButtonProps> = ({ type, show }) => {
  return (
    <button onClick={() => show()} className="PanelButton">
      {type === buttonTypes.ADD && <span>+</span>}
    </button>
  );
};

export { PanelButton };
