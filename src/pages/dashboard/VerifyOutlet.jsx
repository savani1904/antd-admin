// frontend/src/pages/dashboard/VerifyOutlet.jsx
import React, { useEffect, useState } from 'react';
import { Table, Button, message } from 'antd';
import { fetchPendingOutlets, updateOutletStatus } from '@/services/outlet';
import { useHistory } from 'react-router-dom';

const VerifyOutlet = () => {
  const [pendingData, setPendingData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchPendingOutlets()
      .then(response => setPendingData(response.data))
      .catch(err => console.error(err));
  }, []);

  const handleVerify = (record, status) => {
    updateOutletStatus(record.id, { status })
      .then(() => {
        message.success(`Outlet ${status}`);
        // Refresh pending outlets list
        setPendingData(prev => prev.filter(item => item.id !== record.id));
      })
      .catch(() => {
        message.error('Failed to update outlet status');
      });
  };

  const columns = [
    { title: 'Outlet Name', dataIndex: 'name', key: 'name' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="primary" onClick={() => handleVerify(record, 'Verified')}>Approve</Button>
          <Button type="danger" onClick={() => handleVerify(record, 'Rejected')} style={{ marginLeft: '8px' }}>
            Reject
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <h2>Verify Outlets</h2>
      <Table dataSource={pendingData} columns={columns} rowKey="id" />
      <Button type="link" onClick={() => history.push('/dashboard')}>
        Back to Dashboard
      </Button>
    </div>
  );
};

export default VerifyOutlet;