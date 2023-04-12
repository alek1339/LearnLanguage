import { FC } from "react";
import { ISentence } from "../../types/Sentence";

export type SentencePlaceholderWithInputsProps = FC<{
  currentSentence: ISentence;
  onSubmit: () => void;
}>;