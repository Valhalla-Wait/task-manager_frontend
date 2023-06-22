import { EmailInput } from '../Inputs/EmailInput';
import { NameInput } from '../Inputs/NameInput';
import { PasswordInput } from '../Inputs/PasswordInput';

export const SignUpInputs = () => {
  return (
    <>
      <NameInput type="firstname" />
      <NameInput type="lastname" />
      <EmailInput />
      <PasswordInput />
      <PasswordInput confirmPassword />
    </>
  );
};
