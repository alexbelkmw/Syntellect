import "./NumberInput.css";

export const NumberInput = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  return (
    <input
      className="NumberInput"
      type={"number"}
      min={3}
      max={10}
      defaultValue={10}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};
