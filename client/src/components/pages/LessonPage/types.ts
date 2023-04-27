import { FC } from "react";

export type ILessonPage = FC<{
  setCurrentView: (view: string) => void;
  openedLesson: any;
}>;