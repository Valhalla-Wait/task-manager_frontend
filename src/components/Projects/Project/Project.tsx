import { Button, Form, Input, MenuProps, Modal, Select } from 'antd';
import {
  useGetCurrentUserQuery,
  useSearchUsersMutation,
} from 'core/api/generated_types';
import { projectMembersApi } from 'core/store/slice/projectMembersApi';
import { lightTasksApi } from 'core/store/slice/lightTasksApi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './project.module.scss';
import { ProjectAnalytics } from './ProjectAnalytics';
import { ProjectNav } from './ProjectNav';
import { TaskCard } from './TaskCard';

import { Logout } from '../LogOut';
import { LeftOutlined } from '@ant-design/icons';
import { useState } from 'react';

type MenuItemsType = 'tasks' | 'members' | 'analytics';

const { Option } = Select;

export const Project = () => {
  const { query } = useRouter();
  const projectId = Number(query.id);

  const [currentTab, setCurrentTab] = useState<MenuItemsType>('tasks');

  const selectTab: MenuProps['onClick'] = (e) => {
    setCurrentTab(e.key as MenuItemsType);
  };

  const [showAddTasksModal, setShowAddTasksModal] = useState(false);
  const [showAddMembersModal, setShowAddMembersModal] = useState(false);

  const [form] = Form.useForm();

  const { data } = projectMembersApi.useGetProjectByIdQuery({ id: projectId });

  // MEMBERS
  const [addMember] = projectMembersApi.useAddMemberInProjectMutation();
  const [deleteMember] = projectMembersApi.useDeleteMemberInProjectMutation();
  const addMemberHandler = async (memberId: number) => {
    await addMember({ projectId, memberId });
  };
  const deleteMemberHandler = async (memberId: number) => {
    await deleteMember({ projectId, memberId });
  };
  const [search, searchResult] = useSearchUsersMutation();
  const filterProjectUsers = searchResult.data
    ? searchResult.data.searchUsers.filter(
      (user) =>
        !data?.projectsListById.members
          .map((member) => member.id)
          .includes(user.id),
    )
    : [];

  // TASKS
  const [createLightTask] = lightTasksApi.useCreateLightTaskMutation();
  const lighTaskData = lightTasksApi.useGetLighTasksByProjectIdQuery({
    projectId,
  });
  console.log(data);

  //USER
  const userData = useGetCurrentUserQuery();

  return (
    <div className={styles.wrapper}>
      <Logout />
      <Modal
        title={'Add new task'}
        open={showAddTasksModal}
        footer={null}
        onCancel={() => {
          setShowAddTasksModal((prev) => !prev);
          form.resetFields();
        }}
        onOk={() => {
          form.resetFields();
        }}
      >
        <Form
          form={form}
          onFinish={({
            title,
            description,
          }: {
            title: string;
            description: string;
          }) => {
            createLightTask({
              name: title,
              description,
              projectId,
              authorId: Number(userData.data?.getCurrentUser.id),
              executorIds: [],
            });
            setShowAddTasksModal((prev) => !prev);
            form.resetFields(['title']);
          }}
        >
          <Form.Item name="title">
            <Input autoFocus placeholder="Task name" />
          </Form.Item>
          <Form.Item name="description">
            <Input autoFocus placeholder="Description" />
          </Form.Item>
          <Form.Item name="executor">
            <Select placeholder="Executor">
              {data?.projectsListById.members.map((member, index) => (
                <Option key={index} value={Number(member.id)}>
                  {member.firstName} {member.lastName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Create Task</Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title={'Add new member'}
        open={showAddMembersModal}
        footer={null}
        onCancel={() => {
          setShowAddMembersModal((prev) => !prev);
          form.resetFields(['search']);
        }}
      >
        <Form form={form}>
          <Form.Item name="search">
            <Input
              onChange={(e) => search({ email: e.currentTarget.value })}
              autoFocus
              placeholder="Find member by name or email"
            />
          </Form.Item>
        </Form>

        <div className={styles.usersList}>
          {filterProjectUsers.map((user, index) => (
            <div className={styles.memberSearchItem} key={index}>
              <div>{user.firstName}</div> <div>{user.lastName}</div>{' '}
              <div>{user.email}</div>
              <button
                className={styles.addMemberBtn}
                onClick={() => addMemberHandler(Number(user.id))}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </Modal>
      <div className={styles.header}>
        <Link className={styles.backBtn} href="/">
          <LeftOutlined rev={'myProjects'} />
          My projects
        </Link>
        <div className={styles.title}>{data?.projectsListById.name}</div>
        <div className={styles.description}>
          <div className={styles.descriptionTitle}>About:</div>
          <div className={styles.descriptionText}>
            {data?.projectsListById.description}
          </div>
        </div>
      </div>
      <div className={styles.projectItems}>
        <ProjectNav setTab={selectTab} currentTab={currentTab} />
        <div className={styles.projectItem}>
          {currentTab === 'tasks' && (
            <>
              <div className={styles.tasksHeader}>
                <div
                  onClick={() => setShowAddTasksModal((prev) => !prev)}
                  className={styles.addBtn}
                >
                  + Add task
                </div>
              </div>
              {lighTaskData.data?.getLighTasksByProjectId.map((task, index) => (
                <TaskCard
                  key={index}
                  id={Number(task.id)}
                  status={task.status}
                  description={task.description}
                  title={task.name}
                  executor={task.executor[0]}
                  projectUsers={data?.projectsListById.members}
                />
              ))}
            </>
          )}
          {currentTab === 'members' && (
            <>
              <div className={styles.membersHeader}>
                <div
                  onClick={() => setShowAddMembersModal((prev) => !prev)}
                  className={styles.addBtn}
                >
                  + Add member
                </div>
              </div>
              {data?.projectsListById.members.map((user, index) => (
                <div
                  style={{
                    display: 'flex',
                    gap: '20px',
                  }}
                  key={index}
                >
                  <div>{user.firstName}</div>
                  <div>{user.lastName}</div>
                  {/* <div>{user.email}</div> */}
                  <button onClick={() => deleteMemberHandler(Number(user.id))}>
                    -
                  </button>
                </div>
              ))}
            </>
          )}
          {currentTab === 'analytics' && <ProjectAnalytics />}
          {/* <TaskCard status='IN WORK' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti corporis iste minus neque cupiditate repellat accusantium totam aspernatur expedita consequatur sint doloremque magni, quia corrupti dignissimos nostrum ut eos.'
                        title="Self task for me"
                    />
                    <TaskCard status='IN WORK' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti corporis iste minus neque cupiditate repellat accusantium totam aspernatur expedita consequatur sint doloremque magni, quia corrupti dignissimos nostrum ut eos.'
                        title="Self task for me"
                    />
                    <TaskCard status='IN WORK' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti corporis iste minus neque cupiditate repellat accusantium totam aspernatur expedita consequatur sint doloremque magni, quia corrupti dignissimos nostrum ut eos.'
                        title="Self task for me"
                    /> */}
        </div>

        {/* <div className={styles.projectItem}>
                    <div className={styles.projectItemHeader}>
                        Project teams:
                    </div>
                    <div className={styles.projectItemItems}>
                        teams
                    </div>
                </div> */}
      </div>
    </div>
  );
};
