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
  const [currentView, setCurrentView] = useState(LessonViews.All);
  const [openedLesson, setOpenedLesson] = useState('');

  useEffect(() => {
    dispatch(fetchLessons());
    dispatch(fetchProfile({ id: auth.user.id }));
  }, []);

  return (
    <div className="home-container">
      <Sidebar />

      <div className="main-content">
        <LevelsNavbar level={level} setLevel={setLevel} setCurrentView={setCurrentView}/>

        <div className="lessons-view">
          {currentView === LessonViews.All && 
            <Level lessons={lessons} level={level} profile={profile} setCurrentView={setCurrentView} setOpenedLesson={setOpenedLesson} />  
          }
          {currentView === LessonViews.Lesson && <LessonPage setCurrentView={setCurrentView} />  }
        </div>
      </div>
    </div>
  );
};

export default Home;
