import { FC } from "react";

export type MissingWordWithAudioProps = FC<{
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
  submitBtnRef?: React.RefObject<HTMLButtonElement>;
  continueBtnRef?: React.RefObject<HTMLButtonElement>;
}>;