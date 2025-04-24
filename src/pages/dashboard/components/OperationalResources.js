// frontend/src/pages/dashboard/components/OperationalResources.js
import React from 'react';
import { Card, Progress, Typography } from 'antd';
import './OperationalResources.less';

const { Title } = Typography;

const OperationalResources = () => {
  return (
    <Card className="operational-resources" title="Operational Resources">
      <div className="resource-item">
        <Title level={5}>Verification Capacity</Title>
        <Progress percent={75} showInfo />
      </div>
      <div className="resource-item" style={{ marginTop: '16px' }}>
        <Title level={5}>Staff Utilization</Title>
        <Progress percent={60} showInfo />
      </div>
    </Card>
  );
};

export default OperationalResources;