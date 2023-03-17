import type { FC } from 'react';

export type ITranslation = FC<{
  onSubmit: () => void;
  onContinue: () => void;
  showContinue: boolean;
}>;