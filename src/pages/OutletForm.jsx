// src/pages/OutletForm.jsx
import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import api from '../services/api';

const OutletForm = () => {
  const [form] = Form.useForm();
  const [mediaFiles, setMediaFiles] = useState([]);

  const beforeUpload = (file) => {
    setMediaFiles(prevFiles => [...prevFiles, file]);
    return false; // Prevent automatic upload
  };

  const onFinish = async (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));
    mediaFiles.forEach(file => formData.append('media', file));

    try {
      await api.post('/outlets', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      message.success('Outlet created successfully!');
      form.resetFields();
    } catch (err) {
      message.error(err.response?.data?.message || 'Error creating outlet');
    }
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" style={{ maxWidth: 600, margin: 'auto', padding: '50px 0' }}>
      <Form.Item label="Outlet Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Address" name="address" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Landmark" name="landmark">
        <Input />
      </Form.Item>
      <Form.Item label="Classification" name="classification">
        <Input />
      </Form.Item>
      <Form.Item label="Contact Phone" name="phoneNumber" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Latitude" name="lat" rules={[{ required: true }]}>
        <Input type="number" step="any" />
      </Form.Item>
      <Form.Item label="Longitude" name="lng" rules={[{ required: true }]}>
        <Input type="number" step="any" />
      </Form.Item>
      <Form.Item label="Upload Media">
        <Upload beforeUpload={beforeUpload} multiple>
          <Button icon={<UploadOutlined />}>Select Files</Button>
        </Upload>
      </Form.Item>
      <Button type="primary" htmlType="submit">Create Outlet</Button>
    </Form>
  );
};

export default OutletForm;