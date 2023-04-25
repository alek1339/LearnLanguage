import { FC } from "react";

export type ILevelsNavbar = FC<{
  level: string;
  setLevel: (level: string) => void;
  setCurrentView: (view: string) => void;
}>;