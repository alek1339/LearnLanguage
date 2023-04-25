import { FC, ReactNode } from "react";

export type IActionButton = FC<{
  onClick: () => void;
  children?: ReactNode;
  name: string;
}>