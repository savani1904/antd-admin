/* global window */

import { history } from 'umi';
import { stringify } from 'qs';
import store from 'store';
const { pathToRegexp } = require('path-to-regexp');
import { ROLE_TYPE } from 'utils/constant';
import { queryLayout } from 'utils';
import { CANCEL_REQUEST_MESSAGE } from 'utils/constant';
import config from 'config';

/**
 * Redirects user to the dashboard if the current pathname is
 * either "/" or "/login" and if the user is authenticated.
 */
const goDashboard = () => {
  if (pathToRegexp(['/', '/login']).exec(window.location.pathname)) {
    history.push({
      pathname: '/dashboard',
    });
  }
};

export default {
  namespace: 'app',
  state: {
    // Provide a dummy route list for the dashboard.
    routeList: [
      {
        id: '1',
        icon: 'laptop',
        name: 'Dashboard',
        zhName: '仪表盘',
        router: '/dashboard',
      },
    ],
    locationPathname: '',
    locationQuery: {},
    theme: store.get('theme') || 'light',
    collapsed: store.get('collapsed') || false,
    notifications: [
      {
        title: 'New User is registered.',
        date: new Date(Date.now() - 10000000),
      },
      {
        title: 'Application has been approved.',
        date: new Date(Date.now() - 50000000),
      },
    ],
  },
  subscriptions: {
    // When the app starts up, trigger the query effect.
    setup({ dispatch }) {
      dispatch({ type: 'query' });
    },
    // Listen for history changes to update location state.
    setupHistory({ dispatch, history }) {
      history.listen(location => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: location.query,
          },
        });
      });
    },
    // Listen for route changes and cancel pending requests if needed.
    setupRequestCancel({ history }) {
      history.listen(() => {
        const { cancelRequest = new Map() } = window;
        cancelRequest.forEach((value, key) => {
          if (value.pathname !== window.location.pathname) {
            value.cancel(CANCEL_REQUEST_MESSAGE);
            cancelRequest.delete(key);
          }
        });
      });
    },
  },
  effects: {
    *query({ payload }, { put, select }) {
      // Check if the app is already initialized.
      const isInit = store.get('isInit');
      if (isInit) {
        goDashboard();
        return;
      }
      
      // For dummy authentication,
      // we check if a user has been stored in local storage.
      const user = store.get('user');
      const { locationPathname } = yield select(_ => _.app);
      if (user) {
        // For testing, we create a dummy route list and dummy permissions.
        const dummyRouteList = [
          {
            id: '1',
            icon: 'laptop',
            name: 'Dashboard',
            zhName: '仪表盘',
            router: '/dashboard',
          },
        ];
        // For example, if the user's role is ADMIN, we may assign all routes.
        const dummyPermissions = {
          role: user.role,
          visit: ['1'],
        };
        
        store.set('routeList', dummyRouteList);
        store.set('permissions', dummyPermissions);
        store.set('isInit', true);
        
        yield put({
          type: 'updateState',
          payload: {
            routeList: dummyRouteList,
          },
        });
        goDashboard();
      } else if (queryLayout(config.layouts, locationPathname) !== 'public') {
        // If no user is found, redirect to login.
        history.push({
          pathname: '/login',
          search: stringify({
            from: locationPathname,
          }),
        });
      }
    },

    *signOut({ payload }, { put }) {
      // Clear stored data to sign out.
      store.set('routeList', []);
      store.set('permissions', { visit: [] });
      store.set('user', {});
      store.set('isInit', false);
      yield put({ type: 'query' });
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },

    handleThemeChange(state, { payload }) {
      store.set('theme', payload);
      state.theme = payload;
    },

    handleCollapseChange(state, { payload }) {
      store.set('collapsed', payload);
      state.collapsed = payload;
    },

    allNotificationsRead(state) {
      state.notifications = [];
    },
  },
};