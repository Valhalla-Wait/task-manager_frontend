import { Button, Form, Input, Modal } from 'antd';
import { useGetCurrentUserQuery } from 'core/api/generated_types';
import { projectsApi } from 'core/store/slice/porjectsApi';
import Link from 'next/link';
import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './projects.module.scss';

// const projects = [
//   {
//     title: 'hello',
//   },
//   {
//     title: 'sdfas',
//   },
//   {
//     title: 'sadfggf',
//   },
//   {
//     title: 'fdrds',
//   },
// ];

export const Projects = () => {
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);

  const currentUserData = useGetCurrentUserQuery();
  const currentUserId = Number(currentUserData.data?.getCurrentUser.id);
  const [createProject] = projectsApi.useCreateProjectMutation();
  const { data } = projectsApi.useGetProjectsByOwnerIdQuery({
    ownerId: currentUserId,
  });

  console.log(data);
  // const createProject = (project: ProjectType) =>
  //     setProjects((prev) => [project, ...prev]);

  return (
    <div className={styles.wrapper}>
      <Modal
        title={'Create project'}
        open={showModal}
        footer={null}
        onCancel={() => {
          setShowModal((prev) => !prev);
          form.resetFields();
        }}
      >
        <Form
          form={form}
          onFinish={async (formData: {
            title: string;
            description: string;
          }) => {
            await createProject({
              name: formData.title,
              description: formData.description,
              ownerId: currentUserId,
            });

            setShowModal((prev) => !prev);
            form.resetFields();
          }}
          style={{
            textAlign: 'center',
          }}
        >
          <Form.Item name="title">
            <Input autoFocus placeholder="Project name" />
          </Form.Item>
          <Form.Item name="description">
            <Input placeholder="Project description" />
          </Form.Item>
          <Form.Item name="description">
            <Button type="default" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div className={styles.header}>
        <h2 className={styles.title}>My Projects:</h2>
      </div>
      <div className={styles.listWrapper}>
        <div onClick={() => setShowModal((prev) => !prev)}>
          + Create Project
        </div>
        <div className={styles.list}>
          {data?.projectsListByOwnerId.map((projectData, index) => (
            <Link key={index} href={`/project/${projectData.id}`}>
              <ProjectCard
                key={index}
                title={projectData.name}
                id={Number(projectData.id)}
                description={projectData.description}
                owned={projectData.ownerId === currentUserId}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
