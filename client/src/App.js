import React, { Component } from "react";
import "./App.css";
import "./styles/main.scss";
import "./styles/navbar.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import MyNavbar from "./components/Navbar/index.tsx";

import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AdminPage from "./admin/AdminPage";
import AddLesson from "./admin/AddLesson"

import { Provider } from "react-redux";

import store from "./store";
import AddWord from "./AddWord";
import AddSentence from "./admin/AddSentence";
import AddQuestion from "./admin/AddQuestion";
import PracticeSentencesPage from "./components/pages/practice-sentences";
import CreateProfile from "./components/auth/CreateProfile";
import NoMatch from "./components/pages/NoMatch";
import ProtectedRoute from "./components/common/PrivateRoute";
import VideoLesson from "./components/pages/VideoLesson";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <nav>
                <MyNavbar />
              </nav>
            </header>
            <main>
              <div className="main-content">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/profile" element={<CreateProfile />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute>
                        <AdminPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/add-lesson"
                    element={
                      <ProtectedRoute>
                        <AddLesson />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/add-word"
                    element={
                      <ProtectedRoute>
                        <AddWord />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/add-sentence"
                    element={
                      <ProtectedRoute>
                        <AddSentence />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/add-question"
                    element={
                      <ProtectedRoute>
                        <AddQuestion />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/practice-sentence/:_id"
                    element={<PracticeSentencesPage />}
                  />
                  <Route
                    path="/video-lesson/:_id"
                    element={<VideoLesson />}
                  />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
