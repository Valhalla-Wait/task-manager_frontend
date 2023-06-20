import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider, Input, InputNumber, InputNumber as InputNumberAnt, InputNumberProps, List, List as ListAnt, ListProps, Select, Space } from 'antd';
import styles from './taskCard.module.scss'
import { useDebounce } from 'core/hooks/useDebounce';
import { createShowTotal } from 'shared/helpers/createShowTotal';
import { HeaderCard } from './HeaderCard/indedx';
import { ContentCard } from './ContentCard/indedx';

// const { useDebounce } = Hooks;
// const { createShowTotal } = Helpers;

type StatusType = 'IN WORK' | 'NEW' | 'COMPLETED' | 'REJECTED'
export type TaskType = {
    title: string,
    description: string,
    status: StatusType,
}
export const TaskCard = ({title, description, status}:TaskType) => {

    // const status = false

    const [pageSize, setPageSize] = useState<number>(3)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const ref = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    return (
        //Easy task version
        <div className={styles.wrapper}>
           <div className={styles.title}>{title}</div>
           <div className={styles.tags}>
            <Select 
            mode='tags'
    style={{ width: '100%' , height: 'inherit'}}
    placeholder="Tags Mode"
            // dropdownRender={(menu) => (
            //     <>
            //       {menu}
            //       <Divider style={{ margin: '8px 0' }} />
            //       <Space style={{ padding: '0 8px 4px' }}>
            //         <Input
            //           placeholder="Please enter item"
            //         />
            //         <Button type="text">
            //           Add item
            //         </Button>
            //       </Space>
            //     </>
            //   )}
            />
                {/* <div className={styles.tag}>
                    tag#1
                </div>
                <div className={styles.tag}>
                    tag#2
                </div>
                <div className={styles.tag}>
                    tag#3
                </div> */}
           </div>
           <div className={styles.date}>
                12.05 - 14.05
           </div>
           <div className={styles.checkbox}>
                <input type="checkbox" />
           </div>
           <div className={styles.edit}>
                <button>Edit</button>
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