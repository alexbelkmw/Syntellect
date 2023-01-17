import "./Button.css";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className="Button" onClick={onClick}>
      {title}
    </button>
  );
};
