import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const component = () => {
    if (!auth.isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  return component();
}

export default ProtectedRoute;
