import { Form, Input } from 'antd';

export const PasswordInput = ({
  confirmPassword,
}: {
  confirmPassword?: boolean;
}) => {
  return confirmPassword ? (
    <Form.Item
      name="confirmPassword"
      rules={[
        { required: true, message: 'Please repeat password!' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Passwords not match!'));
          },
        }),
      ]}
    >
      <Input.Password placeholder="Confirm password" />
    </Form.Item>
  ) : (
    <Form.Item
      name="password"
      rules={[
        { required: true, message: 'Please input your password!' },
        { max: 24, message: 'Max length 24' },
        { min: 6, message: 'Min length 6' },
      ]}
    >
      <Input.Password placeholder="Password" />
    </Form.Item>
  );
};
