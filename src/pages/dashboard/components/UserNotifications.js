// frontend/src/pages/dashboard/components/UserNotifications.js
import React from 'react';
import { Card, List, Button } from 'antd';
import './UserNotifications.less';

const dummyNotifications = [
  { id: 1, message: 'Outlet #123 was verified.', time: '10:00 AM' },
  { id: 2, message: 'Outlet #124 failed verification.', time: '11:15 AM' },
  { id: 3, message: 'New outlet created: Outlet #125.', time: '12:30 PM' },
];

const UserNotifications = () => {
  return (
    <Card className="user-notifications" title="User Notifications">
      <List
        dataSource={dummyNotifications}
        renderItem={item => (
          <List.Item actions={[<Button type="link" key="ack">Acknowledge</Button>]}>
            <List.Item.Meta
              title={item.message}
              description={item.time}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default UserNotifications;