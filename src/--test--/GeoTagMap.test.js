// src/__tests__/GeoTagMap.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import GeoTagMap from '@/pages/dashboard/components/GeoTagMap';
import dva from 'dva';
import createLoading from 'dva-loading';

// Set up a simple Dva store with sample outlet data
function setupStore(initialState = {}) {
  const app = dva({
    initialState,
    onError(e) {
      console.error(e);
    },
  });
  app.use(createLoading());
  // Load our outlet model
  const outletModel = require('@/models/outlet').default;
  app.model(outletModel);
  return app._store;
}

describe('<GeoTagMap />', () => {
  let store;

  beforeEach(() => {
    // Provide sample data for testing
    store = setupStore({ outlet: { list: [{ _id: '1', name: 'Outlet One', address: 'Address One' }] } });
  });

  test('renders GeoTagMap component with outlet data', async () => {
    render(
      <Provider store={store}>
        <GeoTagMap />
      </Provider>
    );

    // Check for the title
    expect(screen.getByText(/GeoTag Map/i)).toBeInTheDocument();

    // Ensure our sample outlet appears (simulate async data load)
    await waitFor(() => {
      expect(screen.getByText(/Outlet One/i)).toBeInTheDocument();
      expect(screen.getByText(/Address One/i)).toBeInTheDocument();
    });
  });
});