// frontend/src/pages/dashboard/index.js
import React from 'react';
import { Row, Col } from 'antd';
import OutletSummary from './components/OutletSummary';
import PerformanceMetrics from './components/PerformanceMetrics';
import GeoTagMap from './components/GeoTagMap';
import ManagerProfile from './components/ManagerProfile';
import MediaUploads from './components/MediaUploads';
import OperationalResources from './components/OperationalResources';
import RecentActivity from './components/RecentActivity';
import SearchAndFilter from './components/SearchAndFilter';
import UserNotifications from './components/UserNotifications';

const Dashboard = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={8}>
          <OutletSummary />
        </Col>
        <Col xs={24} md={12} lg={16}>
          <PerformanceMetrics />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={24}>
          <GeoTagMap />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <ManagerProfile />
        </Col>
        <Col xs={24} md={12}>
          <MediaUploads />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <OperationalResources />
        </Col>
        <Col xs={24} md={12}>
          <RecentActivity />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <SearchAndFilter />
        </Col>
        <Col xs={24} md={12}>
          <UserNotifications />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;