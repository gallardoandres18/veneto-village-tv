import React from "react";
import ReactDOM from "react-dom";
import ShiftProvider from "./context/ShiftContext";
import "./index.css";
import Shift from "./pages/Shift";

ReactDOM.render(
  <React.StrictMode>
    <ShiftProvider>
      <Shift />
    </ShiftProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
