import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { CountryInfo } from "../api/apiService";
import countries from "../store/Countries";
import record, { CONTROLS } from "../store/Record";
import { Input, InputValue } from "../ui/Input/Input";
import { NumberInput } from "../ui/NumberInput/NumberInput";

export const ThirdControl = observer(() => {
  const controlId = CONTROLS.THIRD;
  const [countryList, setCountryList] = useState<CountryInfo[]>();
  const name = record.records[controlId];
  const isLoading = countries.isLoading;

  useEffect(() => {
    countries.startLoadingCountries(name);
  }, [name]);

  useEffect(() => {
    if (isLoading) {
      setCountryList(countries.countries);
    }
  }, [isLoading]);

  const changeString = (value: InputValue) => {
    record.write(value.id, value.text);
  };

  const changeNumber = (value: string) => {
    countries.setLimit(Number(value));
  };

  return (
    <div style={{ marginTop: "50px", width: "730px" }}>
      Лимит вывода: <NumberInput onChange={changeNumber} />
      <Input
        controlId={controlId}
        value={record.records[controlId]}
        list={controlId}
        onChange={changeString}
      />
      {countryList && (
        <datalist id={controlId}>
          {countryList.map((country, key) => {
            if (key > countries.limit - 1) return null;
            const countryInfo = `${country.name} | ${country.fullName}`;
            return <option key={key} value={countryInfo} />;
          })}
        </datalist>
      )}
    </div>
  );
});
