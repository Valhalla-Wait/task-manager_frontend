import { Button, Form, Input, MenuProps, Modal, Popover } from "antd"
import { useAppSelector } from "core"
import { usersApi } from "core/store/slice/Users/api"
import Link from "next/link"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useSelector } from "react-redux"
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

let usersDB = [
    {
        firstName: 'Kolya',
        lastName: 'Blasov',
        email: 'bbb@yandex.ru'
    },
    {
        firstName: 'Svet',
        lastName: 'Upov',
        email: 'rrr@yandex.ru'
    },
    {
        firstName: 'Marine',
        lastName: 'Polyakov',
        email: 'eee@yandex.ru'
    },
    {
        firstName: 'Jhon',
        lastName: 'Wuch',
        email: 'ccc@yandex.ru'
    },
]

export const Project = () => {
    const [tasks, setTasks] = useState<TaskType[]>([])
    let usersDB = [
        {
            firstName: 'Kolya',
            lastName: 'Blasov',
            email: 'bbb@yandex.ru'
        },
        {
            firstName: 'Svet',
            lastName: 'Upov',
            email: 'rrr@yandex.ru'
        },
        {
            firstName: 'Marine',
            lastName: 'Polyakov',
            email: 'eee@yandex.ru'
        },
        {
            firstName: 'Jhon',
            lastName: 'Wuch',
            email: 'ccc@yandex.ru'
        },
    ]
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

    const [showAddTasksModal, setShowAddTasksModal] = useState(false)
    const [showAddMembersModal, setShowAddMembersModal] = useState(false)

    const [form] = Form.useForm()

    const duplicateTask = (task: TaskType) => {
        setTasks(prev => [task,...prev])
    }

    // const seacrhData = useAppSelector(state => state.users.data)
    // console.log(seacrhData)

    // const [search, data] = usersApi.useSearchUsersMutation()

    // const searchUsers = async(e:ChangeEvent<HTMLInputElement>) => {
    //     await search({email: e.currentTarget.value})
    // }


    const addTask = (task: TaskType) => setTasks(prev => [task, ...prev])
    return (
        <div className={styles.wrapper}>
            <Modal
                title={'Add new task'}
                open={showAddTasksModal}
                footer={null}
                onCancel={() => {
                    setShowAddTasksModal(prev => !prev)
                    form.resetFields()
                }}
            >

                <Form form={form} onFinish={(data: { title: string }) => {

                    addTask({
                        title: data.title,
                        status: 'NEW',
                        description: ''
                    })
                    setShowAddTasksModal(prev => !prev)
                    form.resetFields(['title'])
                }}>
                    <Form.Item name="title">
                        <Input autoFocus placeholder="Task name" />
                    </Form.Item>
                </Form>

            </Modal>
            <Modal
                title={'Add new member'}
                open={showAddMembersModal}
                footer={null}
                onCancel={() => {
                    setShowAddMembersModal(prev => !prev)
                    form.resetFields(['search'])
                }}
            >

                    <Form form={form}>
                    <Form.Item name="search">
                    <Input onChange={() => console.log('search')} autoFocus placeholder="Find member name or email" />
                    </Form.Item>
                    </Form>
                        
 
                <div className={styles.usersList}>
                    {/* {data.data?.searchUsers.map(user => <div>{user.firstName} {user.lastName} {user.email}</div>)} */}
                    {usersDB.map((user, index) => <div key={index}>{user.firstName} {user.lastName} {user.email} <button onClick={() => {
                        setUsers(prev => [user, ...prev])
                        usersDB = [...usersDB.filter(user2=> user2.email !== user.email)]
                    }}>+</button></div>)}
                </div>
            </Modal>
            <div className={styles.header}>
                <Link href='/'>{'< Мои проекты'}</Link>
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
                            <div className={styles.tasksHeader}>
                                <div className={styles.filter}>filter</div>
                                <div onClick={() => setShowAddTasksModal(prev => !prev)} className={styles.addBtn}>+</div>

                            </div>
                            {tasks.map((task, index) =>
                                <TaskCard
                                    key={index}
                                    status={task.status}
                                    description={task.description}
                                    title={task.title}
                                    duplicateTask={() => duplicateTask(task)}
                                    
                                />)
                            }
                        </>}
                        {(currentTab === 'members') &&
                        <>
                            <div className={styles.membersHeader}>
                                <div onClick={() => setShowAddMembersModal(prev => !prev)} className={styles.addBtn}>+</div>

                            </div>
                            {users.map((user, index) =>
                                <div style={{
                                    display: 'flex',
                                    gap: '20px'
                                }} key={index}>
                                    <div>{user.firstName}</div>
                                    <div>{user.lastName}</div>
                                    <div>{user.email}</div>
                                    <button onClick={(e) => setUsers(prev => [...prev.filter(user2 => user2.email !== user.email)])}>-</button>
                                </div>
                                )
                            }
                        </>}
                        {(currentTab === 'analytics') &&<ProjectAnalytics />}
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