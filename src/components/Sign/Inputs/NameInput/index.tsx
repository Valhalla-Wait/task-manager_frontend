import { Form, Input } from 'antd';

const rules = [
  { required: true, message: 'Fiels is required' },
  { pattern: /^[A-Za-zА-Яа-я]+$/, message: 'Only letters!' },
  { max: 12, min: 2, message: 'Length min 2 and max 12' },
];

export const NameInput = ({ type }: { type: 'lastname' | 'firstname' }) => {
  return type === 'firstname' ? (
    <Form.Item name="firstName" rules={rules}>
      <Input placeholder="First name" />
    </Form.Item>
  ) : (
    <Form.Item name="lastName" rules={rules}>
      <Input placeholder="Last name" />
    </Form.Item>
  );
};
