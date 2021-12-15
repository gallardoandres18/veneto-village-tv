import React, { ReactNode, useState } from "react";

import { createContext } from "react";
import { StadiumsType } from "../types";

interface IShiftProvider {
  children: ReactNode;
}

interface IShiftContext {
  selectedStadium: StadiumsType;
  setSelectedStadium: (stadium: StadiumsType) => void;
}

export const ShiftContext = createContext({} as IShiftContext);

const ShiftProvider: React.FC<IShiftProvider> = ({ children }) => {
  const [selectedStadium, setSelectedStadium] =
    useState<StadiumsType>("FOOTBALL");

  return (
    <ShiftContext.Provider value={{ selectedStadium, setSelectedStadium }}>
      {children}
    </ShiftContext.Provider>
  );
};

export default ShiftProvider;
