import { FC } from "react";

export type IPlayBtn = FC<{
  onClick: () => void;
  disabled: boolean;
}>