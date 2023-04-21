import { FC } from "react";
import { ISentence } from "../../types/Sentence";

export type ISentenceForm = FC<{
  onSubmit: (sentence: ISentence) => void;
  sentence?: ISentence;
}>