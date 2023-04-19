import { FC } from "react";
import { ILesson } from "../../types/Lesson";

export type ILessonForm = FC<{
  onSubmit: (lesson: ILesson) => void;
  lesson?: ILesson;
}>;