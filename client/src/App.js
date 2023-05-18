import React, { Component } from "react";
import "./App.scss";
import "./styles/main.scss";
import "./styles/navbar.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import MyNavbar from "./components/Navbar/index.tsx";

import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AdminPage from "./admin/AdminPage";
import AddLesson from "./admin/AddLesson";
import EditLesson from "./admin/EditLesson";
import Sentences from "./admin/Sentences";
import EditSentence from "./admin/EditSentence";
import LessonPage from "./components/pages/LessonPage";

import { Provider } from "react-redux";

import store from "./store";
import AddWord from "./AddWord";
import AddSentence from "./admin/AddSentence";
import AddQuestion from "./admin/AddQuestion";
import PracticeSentencesPage from "./components/pages/practice-sentences";
import CreateProfile from "./components/auth/CreateProfile";
import NoMatch from "./components/pages/NoMatch";
import ProtectedRoute from "./components/common/PrivateRoute";
import AdminRoute from "./components/common/AdminRoute";
import LessonContent from "./components/pages/LessonContent";

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
            <main>
              <div className="main-content">
                <Routes>
                  <Route exact path="/"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/profile"
                    element={
                      <ProtectedRoute>
                        <CreateProfile />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <AdminPage />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/sentences"
                    element={
                      <AdminRoute>
                        <Sentences />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/edit-sentence/:_id"
                    element={
                      <AdminRoute>
                        <EditSentence />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/add-lesson"
                    element={
                      <AdminRoute>
                        <AddLesson />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/edit-lesson/:_id"
                    element={
                      <AdminRoute>
                        <EditLesson />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/add-word"
                    element={
                      <AdminRoute>
                        <AddWord />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/add-sentence"
                    element={
                      <AdminRoute>
                        <AddSentence />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/admin/add-question"
                    element={
                      <AdminRoute>
                        <AddQuestion />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/practice-sentence/:_id"
                    element={
                      <ProtectedRoute>
                        <PracticeSentencesPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/lesson-content/:_id"
                    element={
                      <ProtectedRoute>
                        <LessonContent />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </div>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;