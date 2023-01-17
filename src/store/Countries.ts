import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class Countries {
  constructor() {
    makeAutoObservable(this);
    this.isLoading = false;
    this.countries = [];
    this.limit = 10;
    this.lastName = "";
  }
  isLoading: boolean;
  countries: CountryInfo[];
  limit: number;
  private lastName: string;

  startLoadingCountries(name: string) {
    this.lastName = name;
    this.isLoading = false;
    this.loadCountries(name);
  }

  setLimit(limit: number) {
    this.limit = limit;
    this.loadCountries(this.lastName);
  }

  private async loadCountries(name: string) {
    this.countries = await getCountryByName(name);
    this.isLoading = true;
  }
}

export default new Countries();
