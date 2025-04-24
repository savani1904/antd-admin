// frontend/src/components/PrivateRoute.jsx

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Dummy authentication function – replace with your real auth logic
const isAuthenticated = () => {
  // For example, check for a token in localStorage:
  return Boolean(window.localStorage.getItem('authToken'));
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