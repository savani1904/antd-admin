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
import { FilterProvider } from '@/context/FilterContext';

const Dashboard = () => {
  return (
    <FilterProvider>
      <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
        {/* Row 1: Outlet Summary and Performance Metrics */}
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <OutletSummary />
          </Col>
          <Col xs={24} md={16}>
            <PerformanceMetrics />
          </Col>
        </Row>

        {/* Row 2: Outlet Geolocation Map */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col span={24}>
            <GeoTagMap />
          </Col>
        </Row>

        {/* Row 3: Manager Profile and Media Uploads */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} md={12}>
            <ManagerProfile />
          </Col>
          <Col xs={24} md={12}>
            <MediaUploads />
          </Col>
        </Row>

        {/* Row 4: Operational Resources & Recent Activity */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} md={12}>
            <OperationalResources />
          </Col>
          <Col xs={24} md={12}>
            <RecentActivity />
          </Col>
        </Row>

        {/* Row 5: Search And Filter, User Notifications */}
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          <Col xs={24} md={12}>
            <SearchAndFilter />
          </Col>
          <Col xs={24} md={12}>
            <UserNotifications />
          </Col>
        </Row>
      </div>
    </FilterProvider>
  );
};

export default Dashboard;