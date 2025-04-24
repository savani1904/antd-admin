import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// If you're using Umi, you could use Umi's routing instead. Here, we’ll use react-router-dom for demonstration.
import { useHistory } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // Handle login form submission
  const onFinish = async (values) => {
    setLoading(true);
    const { username, password } = values;

    // Simulate API login call
    // (Replace this section with your real authentication API)
    try {
      // For demonstration, only 'admin'/'admin' succeed.
      if (username === 'admin' && password === 'admin') {
        message.success('Login successful!');
        // Simulate a short delay before redirection
        setTimeout(() => {
          history.push('/dashboard');
        }, 1000);
      } else {
        message.error('Incorrect username or password. Please try again!');
      }
    } catch (error) {
      message.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <div
        style={{
          width: 360,
          padding: '40px 30px',
          backgroundColor: '#fff',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
          Login
        </Title>
        <Form name="login_form" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username or Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="#!" style={{ float: 'right' }}>
              Forgot Password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;