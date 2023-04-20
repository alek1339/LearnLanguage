import { ChangeEvent, FC } from "react";

export interface MyObjectType {
  german: any; // Replace 'any' with the actual type of the 'german' property
  // Add other properties as needed
}

// Define the generic type parameter T for the inputs prop
export type IInputSelect<T> = FC<{
  onInputChange: (value: ChangeEvent<HTMLInputElement>) => void;
  inputs: T;
  filtered: MyObjectType[];
  onSelect: (sentance: string) => void;
}>;
