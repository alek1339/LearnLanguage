import { FC } from "react";
import { ISentence } from "../../types/Sentence";

export type SentencePlaceholderWithInputsProps = FC<{
  currentSentence: ISentence;
  submitBtnRef?: React.RefObject<HTMLButtonElement>;
  continueBtnRef?: React.RefObject<HTMLButtonElement>;
  isCorrect?: boolean;
}>;