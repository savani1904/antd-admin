// frontend/src/pages/dashboard/CreateOutlet.jsx
import React from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { createOutlet } from '@/services/outlet';
import { UploadOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const CreateOutlet = () => {
  const history = useHistory();

  const onFinish = (values) => {
    // values should include outlet details and possibly file uploads
    createOutlet(values)
      .then((response) => {
        message.success('Outlet created successfully and pending verification!');
        // Redirect to dashboard after creation
        history.push('/dashboard');
      })
      .catch((err) => {
        message.error('Failed to create outlet.');
      });
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Create New Outlet</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Outlet Name"
          name="name"
          rules={[{ required: true, message: 'Please input the outlet name!' }]}
        >
          <Input placeholder="Enter outlet name" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input the outlet address!' }]}
        >
          <Input placeholder="Enter outlet address" />
        </Form.Item>
        <Form.Item label="Contact Information" name="contact">
          <Input placeholder="Enter contact details" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Description about the outlet" />
        </Form.Item>
        <Form.Item label="Upload Media" name="media">
          <Upload action="/api/upload" listType="picture">
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Outlet
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateOutlet;