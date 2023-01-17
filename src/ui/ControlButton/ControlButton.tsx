import "./ControlButton.css";

interface ControlButtonProps {
  input: JSX.Element;
  leftButtons?: JSX.Element[];
  rightButtons?: JSX.Element[];
}

export const ControlButton = ({
  input,
  leftButtons,
  rightButtons,
}: ControlButtonProps) => {
  return (
    <div className="ControlButton">
      <div className="ButtonPanel">{leftButtons}</div>
      {input}
      <div className="ButtonPanel">{rightButtons}</div>
    </div>
  );
};
