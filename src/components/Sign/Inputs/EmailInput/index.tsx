import { Form, Input } from 'antd';

export const EmailInput = () => {
  return (
    <Form.Item
      name="email"
      rules={[
        { required: true, message: 'Please input your email!' },
        { type: 'email', message: 'Email is not valid!' },
      ]}
    >
      <Input placeholder="Email" />
    </Form.Item>
  );
};
