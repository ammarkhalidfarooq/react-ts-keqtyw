/** @format */

import React from 'react';
import { Form, Button, Input, Row, Col, Space } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Header from '../components/header';

export default function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      {/* <Header /> */}
      <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Col
          span={6}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
          }}
        >
          <Space style={{ backgroundColor: '#fff' }} size={'middle'}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
