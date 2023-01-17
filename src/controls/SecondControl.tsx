import { Button } from "../ui/Button/Button";
import { ControlButton } from "../ui/ControlButton/ControlButton";
import { Input, InputValue } from "../ui/Input/Input";
import record, { CONTROLS } from "../store/Record";
import { observer } from "mobx-react-lite";

export const SecondControl = observer(() => {
  const controlId = CONTROLS.SECOND;

  const textAlert = () => {
    alert(record.records[controlId]);
  };

  const checkNumber = () => {
    const currentRecord = record.records[controlId];
    const string = currentRecord === "" ? "NaN" : currentRecord;
    const digit = Number(string);
    const isNan = isNaN(digit);
    alert(isNan ? "Неверное число" : digit);
  };

  const changeValue = (value: InputValue) => {
    record.write(value.id, value.text);
  };

  const leftButtons = [<Button title="Проверка числа" onClick={checkNumber} />];
  const rightButtons = [<Button title="Текст в alert" onClick={textAlert} />];

  return (
    <ControlButton
      input={
        <Input
          controlId={controlId}
          value={record.records[controlId]}
          onChange={changeValue}
        />
      }
      leftButtons={leftButtons}
      rightButtons={rightButtons}
    />
  );
});
