import type { FC } from 'react';

export type IConnectWords = FC<{
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
  audioSrc: string;
}>;