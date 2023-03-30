import { FC } from 'react';

export type IModal = FC<{
  children: React.ReactNode;
  onClose: () => void;
}>;