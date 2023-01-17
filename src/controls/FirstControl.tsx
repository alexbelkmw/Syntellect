import { Button } from "../ui/Button/Button";
import { ControlButton } from "../ui/ControlButton/ControlButton";
import { Input, InputValue } from "../ui/Input/Input";
import record, { CONTROLS } from "../store/Record";
import { observer } from "mobx-react-lite";

export const FirstControl = observer(() => {
  const controlId = CONTROLS.FIRST;

  const clearInput = () => {
    record.write(controlId, "");
  };

  const typeHello = () => {
    record.write(controlId, "HelloWorld!");
  };

  const changeValue = (value: InputValue) => {
    record.write(value.id, value.text);
  };

  const rightButtons = [
    <Button title="Очистить" onClick={clearInput} />,
    <Button title="Hello World!" onClick={typeHello} />,
  ];

  return (
    <ControlButton
      input={
        <Input
          controlId={controlId}
          value={record.records[controlId]}
          onChange={changeValue}
        />
      }
      rightButtons={rightButtons}
    />
  );
});
