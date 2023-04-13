import { FC } from "react";

export type MissingWordWithAudioProps = FC<{
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
}>;