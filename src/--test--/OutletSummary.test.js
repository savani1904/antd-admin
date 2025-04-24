// src/--test--/OutletSummary.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import dva from 'dva';
import createLoading from 'dva-loading';
import OutletSummary from '@/pages/dashboard/components/OutletSummary';

// Create a helper function to set up a Dva store,
// which provides the Redux methods required (like getState).
function setupStore(initialState = {}) {
  const app = dva({
    initialState,
    onError: err => console.error(err),
  });
  app.use(createLoading());
  
  // Optionally, you can register models here if needed.
  // app.model(require('@/models/outlet').default);
  
  return app._store; // Dva creates the store here.
}

describe('<OutletSummary />', () => {
  let store;

  beforeEach(() => {
    // Set up your store with any initial state your OutletSummary might expect.
    store = setupStore({
      // For example, if OutletSummary expects an "outlet" state:
      outlet: {
        summary: 'This is a sample outlet summary.',
        // ...other properties as needed.
      },
    });
  });

  it('renders OutletSummary component with outlet summary data', async () => {
    // Render the component wrapped with Provider supplying the store.
    render(
      <Provider store={store}>
        <OutletSummary />
      </Provider>
    );

    // Wait for some element to appear that indicates the summary was rendered.
    // Adjust the following query to match text or elements in your component.
    await waitFor(() => expect(screen.getByText(/sample outlet summary/i)).toBeInTheDocument());

    // Alternatively, add further assertions here.
  });
});