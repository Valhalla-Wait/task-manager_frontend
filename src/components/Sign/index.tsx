import { Button, Form } from 'antd';
import { CreateUserInput, LoginInput } from 'core/api/generated_types';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './sign.module.scss';
import { SignInInputs } from './SignInForm';
import { SignUpInputs } from './SignUpForm';

type SignType = 'Sign Up' | 'Sign In';

export const Sign = () => {
  // const userEmail = useAppSelector(SignInSelectors.signInEmailSelector);
  // const dispatch = useAppDispatch();
  // const [fetch] = useLazyGetUsersQuery();
  // const [login] = authApi.useLoginMutation();
  // const [reg] = authApi.useRegistrationMutation();
  // const [inputData, setInputData] = useState({
  //     email: '',
  //     password: '',
  // });

  // const handler = async () => {
  //     try {
  //         await login({ email: 'ssss@yandex.ru', password: '123456' });
  //     } catch (error) { }
  // };

  // const regHandler = async () => {
  //     try {
  //         await reg({
  //             email: 'huhu@yandex.ru',
  //             password: '123456',
  //             firstName: 'Hahah',
  //             lastName: 'hehe',
  //         });
  //     } catch (error) { }
  // };

  const { push } = useRouter();
  const [signType, setSignType] = useState<SignType>('Sign In');
  const [error, setError] = useState<null | 'Uncorrect email or password'>(
    null,
  );

  const removeApiError = () => setError(null);

  const formHandler = (signData: CreateUserInput | LoginInput) => {
    console.log(signData);
    if (signType === 'Sign In') {
      if (signData.email === 't@t.ru' && signData.password === '123456') {
        setError(null);
        push('/');
      } else {
        setError('Uncorrect email or password');
      }
    } else {
      push('/');
    }
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
          onFinish={formHandler}
          autoComplete="off"
        >
          {signType === 'Sign Up' ? <SignUpInputs /> : <SignInInputs />}
          {error && <span style={{ color: 'red' }}>{error}</span>}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {signType}
            </Button>
          </Form.Item>
          {signType === 'Sign Up' ? 'Have an account' : 'Have not account'}?
          <span className={styles.sign_change_btn} onClick={signTypeHandler}>
            {signType === 'Sign Up' ? 'Sign In' : 'Sign Up'}
          </span>
        </Form>
      </div>
    </div>
  );
};