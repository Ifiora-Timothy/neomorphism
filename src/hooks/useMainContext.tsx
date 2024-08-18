"use client";
import { MainContext } from "@/context/MainContext";
import { useContext } from "react";

export const useMainContext = () => {
  const { setSpeed, speed, mode, updateMode } = useContext(MainContext);
  return { speed, setSpeed, mode, updateMode };
};
