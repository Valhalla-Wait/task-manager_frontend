import { Menu, MenuProps } from 'antd';
import { stat } from 'fs';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CurveType } from 'recharts/types/shape/Curve';
import styles from './projectAnalytics.module.scss'

enum TaskStatuses {
    Completed = 'Completed',
    NotCompleted = 'NotCompleted',
    InWork = 'InWork',
    Rejected = 'Rejected',
}

export const ProjectAnalytics = () => {

    const [usersAnalyticsStatus, setUsersAnalyticsStatus] = useState<TaskStatuses>(TaskStatuses.Completed)

    const changeAnalyticsStatus: MenuProps['onClick'] = (e) => {
        setUsersAnalyticsStatus(e.key as TaskStatuses);
    };

    const menuItems: MenuProps['items'] = [
        {
            label: 'Completed',
            key: TaskStatuses.Completed,
        },
        {
            label: 'Not completed',
            key: TaskStatuses.NotCompleted,
        },
        {
            label: 'In work',
            key: TaskStatuses.InWork,
        },
        {
            label: 'Rejected',
            key: TaskStatuses.Rejected,
        }
    ]

    const statuses = [
        {
            name: 'Completed',
            color: 'var(--color-light-blue)',
        },
        {
            name: 'Not completed',
            color: 'var(--color-light-purple)',
        },
        {
            name: 'In work',
            color: 'var(--color-light-aqua)',
        },

        {
            name: 'Rejected',
            color: 'var(--color-light-grey)',
        },
    ]

    const tasksData = [
        {
            name: '12.05',
            Completed: 25,
            ['Not completed']: 11,
            ['In work']: 16,
            Rejected: 2
        },
        {
            name: '13.05',
            Completed: 15,
            ['Not completed']: 1,
            ['In work']: 36,
            Rejected: 12
        },
        {
            name: '14.05',
            Completed: 17,
            ['Not completed']: 4,
            ['In work']: 22,
            Rejected: 22
        },
    ];

    const usersData = [
        {
            name: 'Mikhail Zaycev',
            Completed: 3,
            NotCompleted: 1,
            InWork: 5,
            Rejected: 2,
        },

        {
            name: 'Vasya Popob',
            Completed: 6,
            NotCompleted: 4,
            InWork: 8,
            Rejected: 5,
        },
        {
            name: 'Lecha Shvedov',
            Completed: 2,
            NotCompleted: 9,
            InWork: 1,
            Rejected: 6,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
        {
            name: 'Petya Bogov',
            Completed: 9,
            NotCompleted: 6,
            InWork: 4,
            Rejected: 7,
        },
    ]

    const projectData = [
        {
            title: 'Completed',
            percent: 45,
            color: 'var(--color-light-blue)',
        },
        {
            title: 'Not Completed',
            percent: 19,
            color: 'var(--color-light-purple)',
        },
        {
            title: 'In Work',
            percent: 22,
            color: 'var(--color-light-aqua)',
        },
        {
            title: 'Rejected',
            percent: 10,
            color: 'var(--color-light-grey)',
        },
    ]

    return (
        <div className={styles.wrapper}>
            <div className={styles.projectAn}>
                <div className={styles.projectStat}>
                    <div className={styles.total}>Total tasks: 80</div>
                    <div className={styles.completed}>Completed: 50</div>
                    <div className={styles.notCompleted}>Not completed: 32</div>
                    <div className={styles.inWork}>In work: 15</div>
                    <div className={styles.rejected}>Rejected: 5</div>
                </div>
                <ResponsiveContainer className={styles.chart}>
                    
                    {/* ЗАМЕНИТЬ НА БАРЫ ИЛИ ЕЩЕ ЧТО ТО */}

                    <PieChart>
                        <Pie
                            data={projectData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="percent"
                            label={({percent, title}) =>{
                                return `${title}: ${percent}%`
                            }}
                            
                        >
                            {projectData.map((entry, index) => (
                                <Cell key={index} name={entry.title} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.tasksAn}>
                <ResponsiveContainer className={styles.chart}>
                    <AreaChart
                        data={tasksData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {statuses.map((statuse, index) => <Area type='linear' key={index} dataKey={statuse.name} stackId="1" stroke={statuse.color} fill={statuse.color} />)}
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.usersAn}>
                <Menu onClick={changeAnalyticsStatus} selectedKeys={[usersAnalyticsStatus]} mode='horizontal' items={menuItems} />
                <ResponsiveContainer className={styles.chart}>
                    <BarChart
                        data={usersData}
                        margin={{
                            top: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={usersAnalyticsStatus} fill="var(--color-light-blue)" />
                    </BarChart>

                </ResponsiveContainer>
            </div>

        </div>
    );
};