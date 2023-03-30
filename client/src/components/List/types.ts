import { FC } from 'react';

export type IList = FC<{
  className?: string;
  elements: string[];
}>;