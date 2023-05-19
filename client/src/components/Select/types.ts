import { FC } from "react";

export type ISelect = FC<{
  header: string;
  options: string[];
  onClick: (option: string) => void;
}>