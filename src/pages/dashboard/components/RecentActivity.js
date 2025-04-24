// frontend/src/pages/dashboard/components/RecentActivity.js
import React, { useEffect, useState } from 'react';
import { Card, Timeline } from 'antd';
import io from 'socket.io-client';
import './RecentActivity.less';

const RecentActivity = () => {
  const [activities, setActivities] = useState([
    { time: '2025-04-22 10:00', message: 'Outlet #123 created' },
    { time: '2025-04-22 11:30', message: 'Outlet #124 verified' },
    { time: '2025-04-23 09:15', message: 'Outlet #125 rejected' },
  ]);

  useEffect(() => {
    // Connect to your socket.io server (adjust URL and port as needed)
    const socket = io('http://localhost:3000');

    socket.on('activityUpdate', (newActivity) => {
      setActivities(prevActivities => [newActivity, ...prevActivities]);
    });

    // Clean up socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Card title="Recent Activity" className="recent-activity">
      <Timeline mode="left">
        {activities.map((activity, index) => (
          <Timeline.Item key={index} label={activity.time}>
            {activity.message}
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default RecentActivity;