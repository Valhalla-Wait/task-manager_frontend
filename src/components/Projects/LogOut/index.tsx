import { useAppDispatch } from 'core';
import { client } from 'core/api/baseApi';
import { AuthContext } from 'core/providers/AuthProvider';
import { authSlice } from 'core/store/slice/Auth/slice';
import { useContext } from 'react';
import styles from './logout.module.scss';
import { ExportOutlined } from '@ant-design/icons';

export const Logout = () => {
  const { user, setUser } = useContext(AuthContext);

  const dispatch = useAppDispatch();
  return (
    <div
      className={styles.logout}
      onClick={() => {
        debugger;
        client.setHeader('authorization', '');
        localStorage.removeItem('token');
        setUser(null);
        dispatch(authSlice.actions.setToken({ token: null }));
      }}
    >
      {user?.firstName} <ExportOutlined rev={'logout'} />
    </div>
  );
};
