import { Form, Input, Modal } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './projects.module.scss';

const projects = [
    {
        title: 'hello',
    },
    {
        title: 'sdfas',
    },
    {
        title: 'sadfggf',
    },
    {
        title: 'fdrds',
    }
]

type ProjectType = {
    title: string
    description: string
    usersCount: number
    owned: boolean
}

export const Projects = () => {

    const [form] = Form.useForm()
    const [showModal, setShowModal] = useState(false)
    const [projects, setProjects] = useState<ProjectType[]>([
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus fugiat reprehenderit nulla placeat est nisi facere, aperiam officia optio labore amet rem quibusdam, iste veritatis velit! Totam, dolore labore',
            usersCount: 12,
            owned: true
        },
        {
            title: 'Proje32423',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus fugiat reprehenderit nulla placeat est nisi facere, aperiam officia optio labore amet rem quibusdam, iste veritatis velit! Totam, dolore labore',
            usersCount: 3,
            owned: false
        },
    ])

    const createProject = (project: ProjectType) => setProjects(prev => [project, ...prev])

    return (

        <div className={styles.wrapper}>
            <Modal
                title={'Create project'}
                open={showModal}
                footer={null}
                onCancel={() => {
                    setShowModal(prev => !prev)
                    form.resetFields()
                }}
            >

                <Form form={form} onFinish={(data: { title: string }) => {

                    createProject({
                        title: data.title,
                        usersCount: 0,
                        description: 'sdfsdf',
                        owned: true
                    })
                    setShowModal(prev => !prev)
                    form.resetFields()
                }}>
                    <Form.Item name="title">
                        <Input autoFocus placeholder="Project name" />
                    </Form.Item>
                    {/* <Form.Item name="description">
                        <Input autoFocus placeholder="Project description" />
                    </Form.Item> */}
                </Form>

            </Modal>
            <div className={styles.header}>
                <h2 className={styles.title}>My Projects:</h2>
            </div>
            <div className={styles.listWrapper}>
                <div onClick={() => setShowModal(prev => !prev)}>+ Create Project</div>
                <div className={styles.list}>
                    {projects.map((porjectData, index) =>
                        <Link href={`/project/${index}`}>
                            <ProjectCard key={index} {...porjectData} />
                        </Link>)}
                </div>
            </div>
        </div>
    );
};
