// frontend/src/pages/dashboard/components/PerformanceMetrics.js
import React from 'react';
import { Column } from '@ant-design/charts';
import './PerformanceMetrics.less';

const PerformanceMetrics = () => {
  const data = [
    { week: 'Week 1', verified: 45 },
    { week: 'Week 2', verified: 60 },
    { week: 'Week 3', verified: 80 },
    { week: 'Week 4', verified: 70 },
  ];

  const config = {
    data,
    xField: 'week',
    yField: 'verified',
    label: {
      position: 'middle',
      style: {
        fill: '#ffffff',
        opacity: 0.6,
      },
    },
    color: '#1890ff',
    meta: {
      week: { alias: 'Week' },
      verified: { alias: 'Verified Outlets' },
    },
  };

  return (
    <div className="performance-metrics">
      <h2>Verification Performance</h2>
      <Column {...config} style={{ height: '400px' }} />
    </div>
  );
};

export default PerformanceMetrics;