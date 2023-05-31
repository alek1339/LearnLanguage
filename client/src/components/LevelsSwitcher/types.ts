import { FC } from "react";
import { LessonsProgress } from "../../enums/lessonsProgress";

export type ILevelSwitcher = FC<{
  correctStrike: number;
  translation: string;
  audioSrc: string;
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
  submitButtonRef?: React.RefObject<HTMLButtonElement>;
  continueButtonRef?: React.RefObject<HTMLButtonElement>;
  allSentencesHaveAudio: boolean;
}>;