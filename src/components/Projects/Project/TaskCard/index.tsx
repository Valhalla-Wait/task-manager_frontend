import React, { useState } from 'react';
import { Dropdown, Form, Input, MenuProps, Modal, Select, Space } from 'antd';
import styles from './taskCard.module.scss';
import { lightTasksApi } from 'core/store/slice/lightTasksApi';

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

export type StatusType =
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

type Executor = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};
type PropsType = {
  id: number;
  title: string;
  description: string;
  status: string;
  executor: Executor;
  projectUsers: any;
};

const selectOptions = [
  {
    name: 'Completed',
    value: 1,
    label: 'COMPLETED',
  },
  {
    name: 'Not completed',
    value: 3,
    label: 'NOT COMPLETED',
  },
  {
    name: 'In work',
    value: 2,
    label: 'IN WORK',
  },
  {
    name: 'New',
    value: 5,
    label: 'NEW',
  },
  {
    name: 'Rejected',
    value: 4,
    label: 'REJECTED',
  },
];

export const TaskCard = ({ id, title, status, executor }: PropsType) => {
  // const status = false

  // const [pageSize, setPageSize] = useState<number>(3);
  const [showAddExecutorModal, setShowAddExecutorModal] = useState(false);
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [currentStatus, setCurrentStatus] = useState<SelectStatusType>({
  //   value: status,
  //   label: status,
  // });
  const [deleteLightTask] = lightTasksApi.useDeleteLightTaskMutation();
  const [updateLightTask] = lightTasksApi.useUpdateLightTaskMutation();
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
      case '3':
        deleteLightTask({
          id,
        });
    }
  };

  return (
    //Easy task version
    <div className={styles.wrapper}>
      <Modal
        title={'Change executor'}
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
                  // setExecutor(user);
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
          onChange={(data) =>
            updateLightTask({
              id,
              statusId: data.value as number,
            })
          }
          defaultValue={{
            value: selectOptions.find((statusOpt) => statusOpt.name === status)
              ?.value,
            label: status,
          }}
          dropdownStyle={{
            width: 'max-content',
          }}
          showArrow={false}
          // onChange={setCurrentStatus}
          options={selectOptions}
        />
      </div>
      <div className={styles.date}>12.05 - 14.05</div>
      <div className={styles.executor}>
        {executor && `${executor.firstName} ${executor.lastName}`}
        {/* <Select
          defaultValue={<Option value={Number(executor.id)}>{executor.firstName} {executor.lastName}</Option>}
        >
          {projectUsers.filter((user:Executor) => user.id !== executor.id).map((member:Executor, index:number) => <Option key={index} value={Number(member.id)}>{member.firstName} {member.lastName}</Option>)}
        </Select> */}
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
