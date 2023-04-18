import type { FC } from 'react';

export type IPracticeBtns = FC<{
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
  submitBtnRef?: React.RefObject<HTMLButtonElement>;
  continueBtnRef?: React.RefObject<HTMLButtonElement>;
}>;