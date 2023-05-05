import type { FC } from 'react';

export type ICustomProgressBar = FC<{
  progress: number;
  width?: number;
  progressStep: number;
  color?: string;
}>;