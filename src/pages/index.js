// src/pages/index.js

import React, { useEffect } from 'react';
import { history } from 'umi';

const IndexPage = () => {
  useEffect(() => {
    // Check for an authentication token in local storage.
    // Adjust the key ('authToken') as needed to match your authentication logic.
    const authToken = localStorage.getItem('authToken');

    // If a token exists, redirect to the Dashboard; otherwise, redirect to the Login page.
    if (authToken) {
      history.replace('/dashboard');
    } else {
      history.replace('/login');
    }
  }, []);

  // Optionally, display a simple loading indicator while the redirection occurs.
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Loading...</h1>
    </div>
  );
};

export default IndexPage;