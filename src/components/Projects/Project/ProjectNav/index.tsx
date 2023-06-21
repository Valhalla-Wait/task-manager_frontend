import { Menu, MenuProps } from 'antd';
import React from 'react';
import styles from './projectNav.module.scss';

type MenuItemsType = 'tasks' | 'members' | 'analytics';

export const ProjectNav = ({
  setTab,
  currentTab,
}: {
  setTab: MenuProps['onClick'];
  currentTab: MenuItemsType;
}) => {
  // const [selected, setSelected] = useState<MenuItemsType>('tasks');
  // const selectItemMenu: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  //   setSelected(e.key as MenuItemsType);
  // };

  const items: MenuProps['items'] = [
    {
      label: 'Tasks',
      key: 'tasks',
    },
    {
      label: 'Members',
      key: 'members',
    },
    {
      label: 'Analytics',
      key: 'analytics',
    },
  ];

  return (
    <Menu
      className={styles.nav}
      onClick={setTab}
      selectedKeys={[currentTab]}
      mode="horizontal"
      items={items}
    />
  );
};
