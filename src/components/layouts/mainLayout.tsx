import { useGetCurrentUserQuery } from 'core/api/generated_types';
import { AuthContext } from 'core/providers/AuthProvider';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import styles from './mainLayout.module.scss';
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = useContext(AuthContext);
  const { data } = useGetCurrentUserQuery();

  useEffect(
    () =>
      setUser({
        id: data?.getCurrentUser.id as string,
        firstName: data?.getCurrentUser.firstName as string,
        lastName: data?.getCurrentUser.lastName as string,
        isActivated: true,
        email: data?.getCurrentUser.email as string,
      }),
    [],
  );
  console.log(user);
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};
