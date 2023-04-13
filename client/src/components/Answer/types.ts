import { FC } from "react";

export type AnswerProps = FC<{
  answer: string;
  isCorrect: boolean;
}>;