import React from 'react';
// import { SortSelect } from './SortSelect';
import styles from './HeaderCard.module.scss';
import { Select } from 'antd';
import { Option } from 'antd/es/mentions';

export const HeaderCard = ({
  title,
}: {
  title: string;
  taskStatus: number;
  listSort: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <div className="header_title">{title}</div>
      <div className="header_sort_title">Упорядочить по:</div>
      <div className="header_sort">
        {/* <SortSelect {...props} /> */}
        <div className={styles.sortWrapper}>
          <Select
            bordered={false}
            value={['date', 'name']} //listSort
            dropdownClassName="DropdownClass"
            onSelect={() => console.log('sort method change')}
          >
            <Option value={'date'}>дате создания</Option>
            <Option value={'name'}>наименованию</Option>
          </Select>
        </div>
      </div>
    </div>
  );
};

// const BoxTitle = styled.div`
//   display: flex;
//   gap: 10px;
//   .header_title {
//     flex-grow: 1;
//     font: var(--h4-18_24-medium);
//     color: var(--color-grey600);
//   }
//   .header_sort_title {
//     font: var(--paragraph-14_24-light);
//     color: var(--color-grey600);
//     @media (max-width: 757px) {
//       display: none;
//     }
//   }
//   .header_sort {
//     font: var(--paragraph-14_24-semibold);
//     color: var(--color-grey800);
//   }
// `;
