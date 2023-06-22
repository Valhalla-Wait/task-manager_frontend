import { Button, Form } from 'antd';
import { api, CreateUserInput, LoginInput } from 'core/api/generated_types';
import { AuthContext } from 'core/providers/AuthProvider';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styles from './sign.module.scss';
import { SignInInputs } from './SignInInputs';
import { SignUpInputs } from './SignUpInputs';

type SignType = 'Sign Up' | 'Sign In';

export const Sign = () => {
  // const userEmail = useAppSelector(state => state);
  // const dispatch = useAppDispatch();
  // const [fetch] = useLazyGetUsersQuery();
  const [login, loginData] = api.useLoginMutation();
  const [registration, regData] = api.useRegistrationMutation();

  const { setUser } = useContext(AuthContext);
  const { push } = useRouter();
  const [signType, setSignType] = useState<SignType>('Sign In');
  const [authError, setAuthError] = useState<null | string>(null);

  useEffect(() => {
    if (loginData.error?.message) setAuthError(loginData.error.message);
  }, [loginData.error?.message]);

  useEffect(() => {
    if (regData.error?.message) setAuthError(regData.error.message);
  }, [regData.error?.message]);

  useEffect(() => {
    if (loginData.data?.login.user) {
      setUser({
        ...loginData.data.login.user,
        isActivated: true,
      });
      push('/');
    }
  }, [loginData.data?.login.user]);
  useEffect(() => {
    if (regData.data?.registration.user) {
      const { id, firstName, lastName, email } = regData.data.registration.user;
      setUser({
        id,
        firstName,
        lastName,
        email,
        isActivated: true,
      });
      push('/');
    }
  }, [regData.data?.registration.user]);

  const removeApiError = () => setAuthError(null);

  const loginHandler = async (signData: LoginInput) => {
    await login({
      email: signData.email,
      password: signData.password,
    });
  };

  const regHandler = async (signData: CreateUserInput) => {
    await registration({
      firstName: signData?.firstName,
      lastName: signData?.lastName,
      email: signData.email,
      password: signData.password,
    });
  };

  const signTypeHandler = () =>
    setSignType((prev) => (prev === 'Sign In' ? 'Sign Up' : 'Sign In'));

  return (
    <div className={styles.wrapper}>
      <div className={styles.sign_form}>
        <h2 className={styles.title}>{signType}</h2>
        <Form
          onFocus={removeApiError}
          name={signType}
          onFinish={signType === 'Sign In' ? loginHandler : regHandler}
          autoComplete="off"
        >
          {signType === 'Sign Up' ? <SignUpInputs /> : <SignInInputs />}
          {authError && <div className={styles.error}>{authError}</div>}
          <Form.Item>
            <Button
              type="primary"
              loading={loginData.isLoading || regData.isLoading}
              htmlType="submit"
            >
              {signType}
            </Button>
          </Form.Item>

          {signType === 'Sign Up' ? (
            <div>
              Have an account?{' '}
              <span
                className={styles.sign_change_btn}
                onClick={signTypeHandler}
              >
                Sign In
              </span>
            </div>
          ) : (
            <div>
              Have not account?{' '}
              <span
                className={styles.sign_change_btn}
                onClick={signTypeHandler}
              >
                Sign Up
              </span>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};
