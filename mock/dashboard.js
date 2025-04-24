import { Mock, Constant } from './_utils'

const { ApiPrefix, Color } = Constant

const Dashboard = Mock.mock({
  // Revenue data for different outlet types over several years
  'revenue|8': [
    {
      'year|+1': 2017, // Starting year will be 2017 and increment for each entry
      'MallOutlets|50000-150000': 1,
      'Standalone|30000-100000': 1,
      'Online|20000-90000': 1,
      'Franchise|25000-120000': 1,
    },
  ],
  // Foot traffic data for all outlets
  footTraffic: {
    'visits|1000-5000': 1,
    'averageDuration|10-60': 1, // in minutes
    'data|20': [
      {
        'visits|10-300': 1,
      },
    ],
  },
  // Status of outlets in terms of their operation state
  outletStatus: [
    {
      name: 'Operational',
      percent: 70.5,
      status: 1,
    },
    {
      name: 'Under Maintenance',
      percent: 15.2,
      status: 2,
    },
    {
      name: 'Closed',
      percent: 14.3,
      status: 3,
    },
  ],
  // Manager details for the system
  manager: {
    name: 'admin',
    outletsManaged: 12,
    totalRevenue: 500000,
  },
  // Monthly performance metrics showing sales and foot traffic per month
  'monthlyPerformance|12': [
    {
      'month|+1': 1,
      'Sales|20000-100000': 1,
      'FootTraffic|1000-5000': 1,
    },
  ],
  // Customer feedback data with ratings and comments
  'feedback|5': [
    {
      name: '@last',
      'rating|1-5': 1,
      comment: '@sentence',
      avatar() {
        return Mock.Random.image(
          '48x48',
          Mock.Random.color(),
          '#757575',
          'png',
          this.name.substr(0, 1)
        );
      },
      date() {
        return `2025-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`;
      },
    },
  ],
  // Recent transactions from various outlets
  'recentTransactions|36': [
    {
      'id|+1': 1,
      outlet: '@last',
      'status|1-4': 1,
      date() {
        return `${Mock.Random.integer(2023, 2025)}-${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH:mm:ss')}`;
      },
      'amount|100-1000.2-2': 1,
    },
  ],
  // An announcement or quote for the outlet management system
  announcement: {
    title: 'Welcome to Outlet Management System!',
    content:
      "This system helps monitor all outlets, track performance, and manage operations efficiently.",
    avatar:
      '//cdn.outletmanagementsystem.com/announcement_logo.png',
  },
  // Key numbers and metrics on the dashboard
  numbers: [
    {
      icon: 'shop',
      color: Color.green,
      title: 'Total Outlets',
      number: 150,
    },
    {
      icon: 'area-chart',
      color: Color.blue,
      title: 'Total Revenue',
      number: 1250000,
    },
    {
      icon: 'user',
      color: Color.purple,
      title: 'Customers Served',
      number: 9800,
    },
    {
      icon: 'calendar',
      color: Color.red,
      title: 'Scheduled Maintenance',
      number: 24,
    },
  ],
})

module.exports = {
  [`GET ${ApiPrefix}/dashboard`](req, res) {
    res.json(Dashboard)
  },
}