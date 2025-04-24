// config/config.js
const config = {
    dva: {},
    routes: [
      {
        path: '/login',
        component: '@/pages/login/LoginForm', // our login component
      },
      {
        path: '/dashboard',
        component: '@/layouts/index', // main layout
        routes: [
          {
            path: '/dashboard',
            component: '@/pages/dashboard/Index', // dashboard home page
          },
          {
            path: '/dashboard/geotag',
            component: '@/pages/dashboard/components/GeoTagMap',
          },
          {
            path: '/dashboard/outlet-summary',
            component: '@/pages/dashboard/components/OutletSummary',
          },
        ],
      },
      {
        path: '/',
        redirect: '/login',
      },
    ],
  };

export default config;