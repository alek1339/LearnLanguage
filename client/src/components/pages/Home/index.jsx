import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchLessons } from "../../../actions/lessonsActions";
import { fetchProfile } from "../../../actions/profileActions";
import Sidebar from "../../Sidebar";
import LevelsNavbar from "../../LevelsNavbar";
import Level from "../../Level";
import { LessonViews } from "../../../enums/lessonViews";

import "./styles.scss";
import LessonPage from "../LessonPage";

const Home = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const [level, setLevel] = useState("A1");
  const [currentView, setCurrentView] = useState("");
  const [openedLesson, setOpenedLesson] = useState('');

  useEffect(() => {
    const storedLevel = localStorage.getItem("level") || "A1";
    const storedCurrentView = localStorage.getItem("currentView") || LessonViews.All;
    const storedOpenedLesson = localStorage.getItem("openedLesson") || "";
  
    setLevel(storedLevel);
    setCurrentView(storedCurrentView);
    setOpenedLesson(storedOpenedLesson);
  
    dispatch(fetchLessons());
    dispatch(fetchProfile({ id: auth.user.id }));
  }, [dispatch, auth.user.id]);

  const handleSetLevel = (level) => {
    localStorage.setItem("level", level);
    setLevel(level);
  }

  const handleSetCurrentView = (view) => {
    localStorage.setItem("currentView", view);
    setCurrentView(view);
  }

  const handleSetCurrentOpenedLesson = (lesson) => {
    localStorage.setItem("openedLesson", lesson);
    setOpenedLesson(lesson);
  }


  return (
    <div className="home-container">
      <Sidebar />

      <div className="main-content">
        <LevelsNavbar level={level} setLevel={handleSetLevel} setCurrentView={handleSetCurrentView}/>

        <div className="lessons-view">
          {currentView === LessonViews.All && 
            <Level lessons={lessons} level={level} profile={profile} setCurrentView={handleSetCurrentView} setOpenedLesson={handleSetCurrentOpenedLesson} />  
          }
          {currentView === LessonViews.Lesson && <LessonPage openedLesson={openedLesson} setCurrentView={handleSetCurrentView} />  }
        </div>
      </div>
    </div>
  );
};

export default Home;
