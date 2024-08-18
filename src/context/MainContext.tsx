"use client";

import {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type contextType = {
  speed: number | null;
  setSpeed: Dispatch<SetStateAction<number | null>>;
  mode: string;
  updateMode: (mode: string) => void;
};

export const MainContext = createContext<contextType>({
  speed: 0,
  setSpeed: () => {},
  mode: "auto",
  updateMode: () => {},
});

export const MainContextProvider = ({ children }: PropsWithChildren) => {
  const AcMap = new Map(
    Object.entries({
      auto: 20,
      dry: 37,
      cool: 15,
      program: 30,
      off: null,
    })
  );

  const [speed, setSpeed] = useState<number | null>(20);
  const [mode, setMode] = useState("auto");

  const updateMode = (mode: string) => {
    setMode(mode);
    setSpeed(AcMap.get(mode.toLowerCase()) || 0);
  };

  return (
    <MainContext.Provider value={{ speed, setSpeed, mode, updateMode }}>
      {children}
    </MainContext.Provider>
  );
};
