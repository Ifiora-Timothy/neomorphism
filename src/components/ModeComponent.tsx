"use client";
import React from "react";
import BlueBtn from "./BlueBtn";
import { useMainContext } from "@/hooks/useMainContext";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  mode: string;
};

const ModeComponent = ({ children, mode }: Props) => {
  const { mode: currMode, updateMode } = useMainContext();
  const setMode = () => {
    if (mode.toLowerCase() == "off" && currMode.toLowerCase() == "off") {
      updateMode("auto");
      return;
    }
    updateMode(mode);
  };

  // let isActive =
  //   mode == "off" || currMode.toLowerCase() === mode.toLowerCase();

  let isActive;
  switch (mode.toLowerCase()) {
    case "auto":
      isActive = currMode.toLowerCase() === "auto";
      break;
    case "dry":
      isActive = currMode.toLowerCase() === "dry";
      break;
    case "cool":
      isActive = currMode.toLowerCase() === "cool";
      break;
    case "program":
      isActive = currMode.toLowerCase() === "program";
      break;
    case "off":
      isActive = currMode.toLowerCase() != "off";
      break;
    default:
      isActive = false;
  }

  const finalActive = currMode.toLowerCase() === "off" ? false : isActive;

  return (
    <div className="flex flex-col gap-1 text-sm items-center justify-center">
      <div
        className={clsx("text-grey", {
          hidden: mode.toLowerCase() === "off",
        })}
      >
        {mode}
      </div>
      <div className="" onClick={setMode}>
        <BlueBtn isActive={finalActive}>{children}</BlueBtn>
      </div>
    </div>
  );
};

export default ModeComponent;
