import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchLessons } from "../actions/lessonsActions";
import { fetchProfile } from "../actions/profileActions";

const Home = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchLessons());
    dispatch(fetchProfile({ id: auth.user.id }));
  }, []);

  // Create component for each level and pass the level as props to the component
  // Then in the component, filter the lessons by the level and render them

  return (
    <div>
      Hello {profile.firstName}
      <h1>Learnesta</h1>
      <section>
        <h2>A1</h2>
        {lessons &&
          lessons.map((lesson) => {
            const alreadyLearned =
              profile &&
              profile.learnedLessons &&
              profile.learnedLessons.find(l => l.lessonId === lesson._id)
                ? true
                : false;
            if (lesson.level === "A1") {
              return (
                <div key={lesson._id}>
                  <Link
                    className={alreadyLearned ? "text-warning" : ""}
                    to={`/practice-sentence/${lesson._id}`}
                  >
                    {lesson.lessonName}
                  </Link>
                  <span className="ml-5">{alreadyLearned ? "100%" : ""}</span>
                </div>
              );
            }
          })}
      </section>
      <section>
        <h2>A2</h2>
        {lessons &&
          lessons.map((lesson) => {
            if (lesson.level === "A2") {
              const alreadyLearned =
                profile &&
                profile.learnedLessons &&
                profile.learnedLessons.find(l => l.lessonId === lesson._id)
                  ? true
                  : false;
              return (
                <div key={lesson._id}>
                  <Link
                    className={alreadyLearned ? "text-warning" : ""}
                    to={`/practice-sentence/${lesson._id}`}
                  >
                    {lesson.lessonName}
                  </Link>
                  <span className="ml-5">{alreadyLearned ? "100%" : ""}</span>
                </div>
              );
            }
          })}
      </section>
      <section>
        <h2>B1</h2>
        {lessons &&
          lessons.map((lesson) => {
            if (lesson.level === "B1") {
              const alreadyLearned =
                profile &&
                profile.learnedLessons &&
                profile.learnedLessons.find(l => l.lessonId === lesson._id && 
                  l.correctStrike >= 3)
                  ? true
                  : false;
              return (
                <div key={lesson._id}>
                  <Link
                    className={alreadyLearned ? "text-warning" : ""}
                    to={`/practice-sentence/${lesson._id}`}
                  >
                    {lesson.lessonName}
                  </Link>
                  <span className="ml-5">{alreadyLearned ? "100%" : ""}</span>
                </div>
              );
            }
          })}
      </section>
      <section>
        <h2>B2</h2>
      </section>
    </div>
  );
};

export default Home;
