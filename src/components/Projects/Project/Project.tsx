import { Button, Form, Input, MenuProps, Modal, Popover } from "antd"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from './project.module.scss'
import { ProjectAnalytics } from "./ProjectAnalytics"
import { ProjectNav } from "./ProjectNav"
import { TaskCard, TaskType } from "./TaskCard"

type MenuItemsType = "tasks" | "members" | "analytics"
type UserType = {
    firstName: string
    lastName: string
    email: string
}

export const Project = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [users, setUsers] = useState<UserType[]>([
        {
            firstName: 'Mikhail',
            lastName: 'Zaycev',
            email: 'ttt@yandex.ru'
        },
        {
            firstName: 'Vasya',
            lastName: 'Popob',
            email: 'popov@yandex.ru'
        },
    ])

    const [currentTab, setCurrentTab] = useState<MenuItemsType>('tasks')

    const selectTab: MenuProps['onClick'] = (e) => {
        setCurrentTab(e.key as MenuItemsType);
      };

    const [showAddBtn, setShowAddBtn] = useState(true)

    const [form] = Form.useForm()



    const addTask = (task: TaskType) => setTasks(prev => [task, ...prev])
    return (
        <div className={styles.wrapper}>
            <Modal
                title={'Add new task'}
                open={!showAddBtn}
                footer={null}
                onCancel={() => {
                    setShowAddBtn(prev => !prev)
                    form.resetFields()
                }}
            >

                <Form form={form} onFinish={(data: { title: string }) => {

                    addTask({
                        title: data.title,
                        status: 'NEW',
                        description: ''
                    })
                    setShowAddBtn(prev => !prev)
                    form.resetFields()
                }}>
                    <Form.Item name="title">
                        <Input autoFocus placeholder="Task name" />
                    </Form.Item>
                </Form>

            </Modal>
            <div className={styles.header}>
                <div className={styles.title}>
                    V-Planner
                </div>
                <div className={styles.description}>
                    <div className={styles.descriptionTitle}>About:</div>
                    <div className={styles.descriptionText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deleniti corporis iste minus neque cupiditate repellat accusantium totam aspernatur expedita consequatur sint doloremque magni, quia corrupti dignissimos nostrum ut eos.
                    </div>
                </div>
            </div>
            <div className={styles.projectItems}>
                <ProjectNav setTab={selectTab} currentTab={currentTab}/>
                <div className={styles.projectItem}>
                    {(currentTab === 'tasks') &&
                        <>
                            <div className={styles.projectItemHeader}>
                                <div>Project tasks:</div>
                                <div className={styles.filter}>filter</div>
                                <div onClick={() => setShowAddBtn(prev => !prev)} className={styles.addBtn}>+</div>

                            </div>
                            {tasks.map((task, index) =>
                                <TaskCard
                                    key={index}
                                    status={task.status}
                                    description={task.description}
                                    title={task.title}
                                />)
                            }
                        </>}
                        {(currentTab === 'members') &&
                        <>
                            <div className={styles.projectItemHeader}>
                                <div>Project Members:</div>
                                <div onClick={() => setShowAddBtn(prev => !prev)} className={styles.addBtn}>+</div>

                            </div>
                            {users.map((user, index) =>
                                <div style={{
                                    display: 'flex',
                                    gap: '20px'
                                }} key={index}>
                                    <div>{user.firstName}</div>
                                    <div>{user.lastName}</div>
                                    <div>{user.email}</div>
                                </div>
                                )
                            }
                        </>}
                        {(currentTab === 'analytics') &&
                        <>
                            <div className={styles.projectItemHeader}>
                                <div>Project analytics:</div>
                                <div className={styles.filter}>filter</div>
                                <div onClick={() => setShowAddBtn(prev => !prev)} className={styles.addBtn}>+</div>

                            </div>
                            <ProjectAnalytics />
                        </>}
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
    )
}