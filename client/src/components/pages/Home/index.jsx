import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchLessons } from "../../../actions/lessonsActions";
import { fetchProfile } from "../../../actions/profileActions";
import Sidebar from "../../Sidebar";
import LevelsNavbar from "../../LevelsNavbar";
import Level from "../../Level";

import "./styles.scss";

const Home = () => {
  const dispatch = useDispatch();
  const lessons = useSelector((state) => state.lessons);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const [level, setLevel] = useState("A1");

  useEffect(() => {
    dispatch(fetchLessons());
    dispatch(fetchProfile({ id: auth.user.id }));
  }, []);

  return (
    <div className="home-container">
      <Sidebar />

      <div className="main-content">
        <nav className="nav"></nav>
        <LevelsNavbar level={level} setLevel={setLevel}/>

        <div className="levels-navigation">
          <Level lessons={lessons} level={level} profile={profile}/>  
        </div>
      </div>
    </div>
  );
};

export default Home;
