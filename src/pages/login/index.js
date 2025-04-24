import React, { useState } from 'react';
import { Button, Row, Input, Form, message } from 'antd';
import { GlobalFooter } from 'components';
import { GithubOutlined } from '@ant-design/icons';
import { t, Trans } from '@lingui/macro';
import { setLocale } from 'utils';
import config from 'utils/config';
import { login } from '@/utils/auth'; // Import the dummy authentication function
import { history } from 'umi'; // Redirect functionality
import styles from './index.less';

const Login = () => {
  const [loading, setLoading] = useState(false);

  // Handle login submission using dummy authentication
  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const result = login(values.username, values.password); // Authenticate user

      if (result.success) {
        message.success('Login successful! Redirecting...');
        history.push('/dashboard'); // Redirect to dashboard after login
      } else {
        message.error(result.message); // Show error message if authentication fails
      }
    } catch (error) {
      message.error('Login failed! Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  // Footer links remain unchanged
  let footerLinks = [
    {
      key: 'github',
      title: <GithubOutlined />,
      href: 'https://github.com/zuiidea/antd-admin',
      blankTarget: true,
    },
  ];

  if (config.i18n) {
    footerLinks = footerLinks.concat(
      config.i18n.languages.map((item) => ({
        key: item.key,
        title: (
          <span onClick={() => setLocale(item.key)}>
            {item.title}
          </span>
        ),
      }))
    );
  }

  return (
    <>
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt="logo" src={config.logoPath} />
          <span>{config.siteName}</span>
        </div>
        <Form onFinish={handleLogin}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: t`Please input your username!` }]}
            hasFeedback
          >
            <Input placeholder={t`Username`} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: t`Please input your password!` }]}
            hasFeedback
          >
            <Input type="password" placeholder="Password" required />
          </Form.Item>
          <Row>
            <Button type="primary" htmlType="submit" loading={loading}>
              <Trans>Sign in</Trans>
            </Button>
            <p>
              <span className="margin-right">
                <Trans>Username</Trans>: <b>admin</b> or <b>guest</b>
              </span>
              <span>
                <Trans>Password</Trans>: <b>admin123</b> or <b>guest</b>
              </span>
            </p>
          </Row>
        </Form>
      </div>
      <div className={styles.footer}>
        <GlobalFooter links={footerLinks} copyright={config.copyright} />
      </div>
    </>
  );
};

export default Login;