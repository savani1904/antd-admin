// src/--test--/LoginForm.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import dva from 'dva';
import createLoading from 'dva-loading';
import LoginForm from '@/pages/login/LoginForm';

// A helper function to set up a Dva store
function setupStore(initialState = {}) {
  const app = dva({
    initialState,
    onError: (err) => console.error(err),
  });
  app.use(createLoading());
  // Optionally register your models if needed:
  // app.model(require('@/models/login').default);
  return app._store;
}

describe('<LoginForm />', () => {
  let store;

  beforeEach(() => {
    store = setupStore({ user: { token: null } });
  });

  it('renders login form fields', async () => {
    // Render the component wrapped in Provider for Redux/Dva
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
    
    // Use waitFor to allow any asynchronous operations to complete.
    const emailInput = await waitFor(() =>
      screen.getByPlaceholderText(/email/i)
    );
    const passwordInput = await waitFor(() =>
      screen.getByPlaceholderText(/password/i)
    );

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});