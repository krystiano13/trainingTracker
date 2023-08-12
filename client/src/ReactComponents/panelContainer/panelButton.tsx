export enum buttonTypes {
  ADD,
  SHOW,
}

interface PanelButtonProps {
  type: buttonTypes;
}

const PanelButton: React.FC<PanelButtonProps> = ({ type }) => {
  return (
    <button className="PanelButton">
      {type === buttonTypes.ADD && <span>+</span>}
    </button>
  );
};

export { PanelButton };
