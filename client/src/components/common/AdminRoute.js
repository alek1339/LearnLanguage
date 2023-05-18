import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  const component = () => {
    if (!auth.isAuthenticated || !auth.user.isAdmin) {
      // Redirect to login or unauthorized page
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return component();
};

export default AdminRoute;
