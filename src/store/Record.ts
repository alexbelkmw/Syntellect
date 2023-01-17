import { makeAutoObservable } from "mobx";

export enum CONTROLS {
  FIRST = "FIRST",
  SECOND = "SECOND",
  THIRD = "THIRD",
}

class Records {
  constructor() {
    makeAutoObservable(this);
  }

  records: Record<string, string> = { FIRST: "", SECOND: "", THIRD: "" };

  write(key: string, text: string) {
    this.records[key] = text;
  }
}

export default new Records();
