import { useEffect } from 'react';
import AuthForm from '../../components/AuthForm';

import * as s from '../../components/AuthForm/style';

export default function Register() {
  useEffect(() => {
    window.localStorage.removeItem('dinga.token');
    window.localStorage.removeItem('dinga.user');
  }, []);

  return (
    <s.Container>
      <s.Title>Sign-up</s.Title>
      <AuthForm isRegister />
    </s.Container>
  );
}
