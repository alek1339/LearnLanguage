import { FC } from "react";

export type ListenWriteProps = FC<{
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
}>;