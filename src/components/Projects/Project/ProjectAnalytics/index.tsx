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

    const allTasks = {
        Total: 102,
        Completed: 50,
        ['Not completed']: 32,
        ['In work']: 15,
        Rejected: 5,
    }

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

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: { cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, percent: number }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        console.log(x, y)
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${percent}%`}
            </text>
        );
    };

    const getStatusColor = (status: TaskStatuses) => {
        switch (status) {
            case TaskStatuses.Completed:
                return 'var(--color-light-blue)'
            case TaskStatuses.NotCompleted:
                return 'var(--color-light-purple)'
            case TaskStatuses.InWork:
                return 'var(--color-light-aqua)'
            case TaskStatuses.Rejected:
                return 'var(--color-light-grey)'
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.analytics}>
                <div className={styles.header}>Tasks</div>
                <ResponsiveContainer className={styles.chart}>
                    <BarChart
                        data={[allTasks]}
                        margin={{
                            top: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={'Completed'} fill="var(--color-light-blue)" />
                        <Bar dataKey={'Not completed'} fill="var(--color-light-purple)" />
                        <Bar dataKey={'In work'} fill="var(--color-light-aqua)" />
                        <Bar dataKey={'Rejected'} fill="var(--color-light-grey)" />
                        <Bar dataKey={'Total'} fill="darkolivegreen" />
                    </BarChart>

                </ResponsiveContainer>
            </div>
            {/* <div className={styles.tasksAn}>
                <ResponsiveContainer className={styles.chart}>
                    <AreaChart
                        data={tasksData}
                        margin={{
                            right: 30,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {statuses.map((statuse, index) => <Area type='linear' key={index} dataKey={statuse.name} stackId="1" stroke={statuse.color} fill={statuse.color} />)}
                    </AreaChart>
                </ResponsiveContainer>
            </div> */}
            <div className={styles.analytics}>
            <div className={styles.header}>Users</div>
                <Menu className={styles.analyticsMenu} onClick={changeAnalyticsStatus} selectedKeys={[usersAnalyticsStatus]} mode='horizontal' items={menuItems} />
                <ResponsiveContainer className={styles.chart}>
                    <BarChart
                        data={usersData}
                        margin={{
                            right: 30
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={usersAnalyticsStatus} fill={getStatusColor(usersAnalyticsStatus)} />
                    </BarChart>

                </ResponsiveContainer>
            </div>

        </div>
    );
};