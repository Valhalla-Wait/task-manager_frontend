import React, { useState } from 'react';
import { Dropdown, Form, Input, MenuProps, Modal, Select, Space } from 'antd';
import styles from './taskCard.module.scss';

// const { useDebounce } = Hooks;
// const { createShowTotal } = Helpers;

let usersDB = [
  {
    firstName: 'Kolya',
    lastName: 'Blasov',
    email: 'bbb@yandex.ru',
  },
  {
    firstName: 'Svet',
    lastName: 'Upov',
    email: 'rrr@yandex.ru',
  },
  {
    firstName: 'Marine',
    lastName: 'Polyakov',
    email: 'eee@yandex.ru',
  },
  {
    firstName: 'Jhon',
    lastName: 'Wuch',
    email: 'ccc@yandex.ru',
  },
];

type StatusType =
  | 'IN WORK'
  | 'NEW'
  | 'COMPLETED'
  | 'REJECTED'
  | 'NOT COMPLETED';
export type TaskType = {
  title: string;
  description: string;
  status: StatusType;
};

type PropsType = {
  title: string;
  description: string;
  status: StatusType;
  duplicateTask: () => void;
};

type SelectStatusType = {
  value: StatusType;
  label: StatusType;
};

const selectOptions: SelectStatusType[] = [
  {
    value: 'COMPLETED',
    label: 'COMPLETED',
  },
  {
    value: 'NOT COMPLETED',
    label: 'NOT COMPLETED',
  },
  {
    value: 'IN WORK',
    label: 'IN WORK',
  },
  {
    value: 'NEW',
    label: 'NEW',
  },
  {
    value: 'REJECTED',
    label: 'REJECTED',
  },
];

type Executor = {
  firstName: string;
  lastName: string;
};

export const TaskCard = ({ title, duplicateTask, status }: PropsType) => {
  // const status = false

  // const [pageSize, setPageSize] = useState<number>(3);
  const [showAddExecutorModal, setShowAddExecutorModal] = useState(false);
  const [executor, setExecutor] = useState<Executor | null>(null);
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [currentStatus, setCurrentStatus] = useState<SelectStatusType>({
  //   value: status,
  //   label: status,
  // });

  const [form] = Form.useForm();

  const items: MenuProps['items'] = [
    {
      label: 'Add executor',
      key: '0',
    },
    {
      label: 'Duplicate',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Delete',
      key: '3',
    },
  ];

  const dropHan: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case '0':
        setShowAddExecutorModal((prev) => !prev);
      case '1':
        duplicateTask();
    }
  };

  return (
    //Easy task version
    <div className={styles.wrapper}>
      <Modal
        title={'Add new member'}
        open={showAddExecutorModal}
        footer={null}
        onCancel={() => {
          setShowAddExecutorModal((prev) => !prev);
          form.resetFields(['executor']);
        }}
      >
        <Form form={form}>
          <Form.Item name="executor">
            <Input
              onChange={() => console.log('executor')}
              autoFocus
              placeholder="Add task executor"
            />
          </Form.Item>
        </Form>

        <div className={styles.usersList}>
          {/* {data.data?.searchUsers.map(user => <div>{user.firstName} {user.lastName} {user.email}</div>)} */}
          {usersDB.map((user, index) => (
            <div key={index}>
              {user.firstName} {user.lastName} {user.email}{' '}
              <button
                onClick={() => {
                  setExecutor(user);
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </Modal>
      <div className={styles.title}>{title}</div>
      <div className={styles.status}>
        <Select
          className={styles.statusSelect}
          bordered={false}
          labelInValue
          dropdownStyle={{
            width: 'max-content',
          }}
          showArrow={false}
          defaultValue={{ value: status, label: status }}
          // onChange={setCurrentStatus}
          options={selectOptions}
        />
      </div>
      <div className={styles.date}>12.05 - 14.05</div>
      <div className={styles.executor}>
        {executor && `${executor.firstName} ${executor.lastName}`}
      </div>
      <div className={styles.edit}>
        <Dropdown menu={{ items, onClick: dropHan }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>Edit</Space>
          </a>
        </Dropdown>
      </div>
    </div>

  //Hard task version
  // <div className={styles.wrapper}>
  //    <div className={styles.title}>{title}</div>
  //    <div className={styles.description}>{description}</div>
  //    <div className={styles.status}>{status}</div>
  //    <div className={styles.tags}>
  //         <div className={styles.tag}>
  //             tag#1
  //         </div>
  //         <div className={styles.tag}>
  //             tag#2
  //         </div>
  //         <div className={styles.tag}>
  //             tag#3
  //         </div>
  //    </div>
  //    <div className={styles.date}>
  //         12.05 - 14.05
  //    </div>
  //    <div className={styles.edit}>
  //         <button>Edit</button>
  //    </div>
  // </div>
  );
};
