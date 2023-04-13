import type { FC } from 'react';

export type ITranslationTextArea = FC<{
  onSubmit: () => void;
  resetTranslation: boolean;
  setResetTranslation: (value: boolean) => void;
}>;