// frontend/src/pages/dashboard/components/ManagerProfile.js
import React from 'react';
import { Card, Avatar, Typography } from 'antd';
import { Line } from '@ant-design/charts';
import './ManagerProfile.less';

const { Title, Text } = Typography;

const ManagerProfile = () => {
  const performanceData = [
    { month: 'Jan', performance: 70 },
    { month: 'Feb', performance: 80 },
    { month: 'Mar', performance: 65 },
    { month: 'Apr', performance: 90 },
    { month: 'May', performance: 85 },
    { month: 'Jun', performance: 95 },
  ];

  const lineConfig = {
    data: performanceData,
    xField: 'month',
    yField: 'performance',
    smooth: true,
    color: '#52c41a',
    tooltip: { showMarkers: false },
  };

  return (
    <Card className="manager-profile" bordered={false}>
      <div className="profile-header">
        <Avatar size={64} src="/path/to/user-background.png" />
        <div className="profile-details">
          <Title level={4}>Manager Name</Title>
          <Text type="secondary">Outlet Manager</Text>
        </div>
      </div>
      <div className="performance-chart">
        <Title level={5}>Monthly Performance</Title>
        <Line {...lineConfig} style={{ height: '200px' }} />
      </div>
    </Card>
  );
};

export default ManagerProfile;