// src/app.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './pages/Registration';
import OutletForm from './pages/OutletForm';
import OutletList from './pages/OutletList';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/register" component={Registration} />
      <Route exact path="/create-outlet" component={OutletForm} />
      <Route exact path="/outlets" component={OutletList} />
      {/* You can add additional routes or a default route */}
    </Switch>
  </Router>
);

export default App;