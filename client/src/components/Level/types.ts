import { FC } from "react";
import { ILesson } from "../../types/Lesson";
import { IProfile } from "../../types/Profile";

export type ILevel = FC<{
  level: string;
  lessons: ILesson[];
  profile?: IProfile;
  setCurrentView: (view: string) => void;
  setOpenedLesson: (lesson: string) => void;
}>