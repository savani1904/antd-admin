// frontend/src/pages/dashboard/components/MediaUploads.js
import React from 'react';
import { Card, List, Button } from 'antd';
import './MediaUploads.less';

const dummyMedia = [
  { id: 1, name: 'Image 1', url: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Image 2', url: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Image 3', url: 'https://via.placeholder.com/150' },
  // Additional media items...
];

const MediaUploads = () => {
  return (
    <Card className="media-uploads" title="Media Uploads">
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={dummyMedia}
        renderItem={(item) => (
          <List.Item>
            <div className="media-item">
              <img src={item.url} alt={item.name} />
              <div className="media-name">{item.name}</div>
              <Button type="primary" size="small">View</Button>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default MediaUploads;