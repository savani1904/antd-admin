// src/pages/login/LoginForm.js
import React, { useState } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Alert } from 'antd';
import { history } from 'umi';
import '@/assets/styles/global.css';

const LoginForm = ({ dispatch, user }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    await dispatch({
      type: 'user/login',
      payload: values,
    });
    setLoading(false);
    // If login is successful, redirect to dashboard.
    if (user && user.token) {
      history.push('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Login</h2>
      {user && !user.token && (
        <Alert 
          message="Login failed. Please check your credentials." 
          type="error" 
          showIcon 
          style={{ marginBottom: 16 }}
        />
      )}
      <Form name="login" onFinish={onFinish}>
        <Form.Item 
          name="email" 
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Not a valid email!' }
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item 
          name="password" 
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(({ user }) => ({ user }))(LoginForm);