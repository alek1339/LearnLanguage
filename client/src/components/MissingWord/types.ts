import type { FC } from 'react';

export type IMissingWord = FC<{
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
}>;