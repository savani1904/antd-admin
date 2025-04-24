// src/layouts/index.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '@/assets/styles/global.css';

const { Header, Content, Footer } = Layout;

const BasicLayout = ({ children }) => (
  <Layout>
    <Header>
      <div className="logo" style={{ float: 'left' }}>Outlet Management</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard Home</Link>
        </Menu.Item>
        <Menu.Item key="geotag">
          <Link to="/dashboard/geotag">GeoTag Map</Link>
        </Menu.Item>
        <Menu.Item key="summary">
          <Link to="/dashboard/outlet-summary">Outlet Summary</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '24px', minHeight: 'calc(100vh - 134px)' }}>
      {children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>Outlet Management ©2025</Footer>
  </Layout>
);

export default BasicLayout;