// frontend/src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  // Replace with your actual auth check (e.g., checking a token in localStorage)
  return localStorage.getItem('authToken') ? true : false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest} 
      render={props =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      } 
    />
  );
};

export default PrivateRoute;