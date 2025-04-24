// frontend/src/app.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Public login page
import Login from './pages/login/LoginForm';

// Protected routes
import Dashboard from './pages/dashboard';
import CreateOutlet from './pages/dashboard/CreateOutlet';
import VerifyOutlet from './pages/dashboard/VerifyOutlet';

// PrivateRoute ensures only authenticated users can access protected pages
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Public route: Login */}
        <Route path="/login" component={Login} />

        {/* Protected routes */}
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/dashboard/create-outlet" component={CreateOutlet} />
        <PrivateRoute path="/dashboard/verify-outlet" component={VerifyOutlet} />

        {/* Fallback: redirect any unknown route to Login */}
        <Redirect from="*" to="/login" />
      </Switch>
      {/* Debug footer to confirm app mounting */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          fontSize: '12px',
          padding: '4px 0',
          backgroundColor: '#f0f2f5',
        }}
      >
        App loaded
      </div>
    </Router>
  );
};

export default App;