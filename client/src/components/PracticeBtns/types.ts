import type { FC } from 'react';

export type IPracticeBtns = FC<{
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
}>;