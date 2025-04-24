// src/pages/Registration.jsx
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import api from '../services/api';
import apiConfig from '../apiConfig';

const Registration = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const sendOTP = async () => {
    try {
      await api.post(apiConfig.register, { phoneNumber: phone });
      setOtpSent(true);
      message.success('OTP sent successfully!');
    } catch (err) {
      message.error(err.response?.data?.message || 'Error sending OTP');
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await api.post(apiConfig.verify, { phoneNumber: phone, otp });
      localStorage.setItem('token', response.data.token);
      message.success('Phone verified successfully!');
      // After verification, you could redirect to the outlet creation page:
      // history.push('/create-outlet');
    } catch (err) {
      message.error(err.response?.data?.message || 'Verification failed');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: '50px 0' }}>
      {!otpSent ? (
        <Form onFinish={sendOTP}>
          <Form.Item label="Phone Number" name="phone" rules={[{ required: true }]}>
            <Input value={phone} onChange={e => setPhone(e.target.value)} />
          </Form.Item>
          <Button type="primary" htmlType="submit">Send OTP</Button>
        </Form>
      ) : (
        <Form onFinish={verifyOTP}>
          <Form.Item label="Enter OTP" name="otp" rules={[{ required: true }]}>
            <Input value={otp} onChange={e => setOtp(e.target.value)} />
          </Form.Item>
          <Button type="primary" htmlType="submit">Verify OTP</Button>
        </Form>
      )}
    </div>
  );
};

export default Registration;