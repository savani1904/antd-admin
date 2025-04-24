// frontend/src/pages/dashboard/components/OutletSummary.js
import React from 'react';
import { Pie } from '@ant-design/charts';
import './OutletSummary.less';

const OutletSummary = () => {
  const data = [
    { status: 'Created', count: 120 },
    { status: 'Under Review', count: 45 },
    { status: 'Verified', count: 230 },
    { status: 'Rejected', count: 15 },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'count',
    colorField: 'status',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-active' }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Outlet\nSummary',
      },
    },
  };

  return (
    <div className="outlet-summary">
      <h2>Outlet Summary</h2>
      <Pie {...config} style={{ height: '400px' }} />
    </div>
  );
};

export default OutletSummary;