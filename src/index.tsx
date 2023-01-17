import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FirstControl } from "./controls/FirstControl";
import { SecondControl } from "./controls/SecondControl";
import { ThirdControl } from "./controls/ThirdControl";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="Wrapper">
      <FirstControl />
      <SecondControl />
      <ThirdControl />
    </div>
  </React.StrictMode>
);
