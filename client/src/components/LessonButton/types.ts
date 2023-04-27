import { FC } from "react";

export type ILessonButton = FC<{
  onClick: () => void;
  btnText: string;
}>;