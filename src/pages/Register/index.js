import AuthForm from '../../components/AuthForm';

import * as s from '../../components/AuthForm/style';

export default function Register() {
  return (
    <s.Container>
      <s.Title>Sign-up</s.Title>
      <AuthForm isRegister />
    </s.Container>
  );
}
