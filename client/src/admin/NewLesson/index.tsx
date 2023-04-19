import React from "react";
import { useAppDispatch } from '../../store';

import "./styles.scss";

import { addLesson } from "../../actions/lessonsActions";
import { INewLesson } from "./types";
import LessonForm from "../LessonForm";
import { ILesson } from "../../types/Lesson";

const NewLesson: INewLesson = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (newLesson: ILesson) => {
    dispatch(addLesson(newLesson));
  };

  return (
    <div className="new-lesson-container">
      <h1 className="flex justify-center">Adding new lesson</h1>
      <LessonForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewLesson;
