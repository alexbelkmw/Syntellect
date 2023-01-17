import "./Input.css";

export interface InputValue {
  id: string;
  text: string;
}

interface InputProps {
  controlId: string;
  value: string;
  onChange: (value: InputValue) => void;
  list?: string;
}

export const Input = ({ controlId, value, list, onChange }: InputProps) => {
  return (
    <input
      className="Input"
      value={value}
      onChange={(e) => {
        onChange({ id: controlId, text: e.target.value });
      }}
      list={list ? list : undefined}
    />
  );
};
