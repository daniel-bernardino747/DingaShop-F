import { Link } from 'react-router-dom';

import AuthForm from '../../components/AuthForm';
import * as s from '../../components/AuthForm/style';

export default function Login() {
  return (
    <>
      <s.Container>
        <s.Title>Sign-in</s.Title>
        <AuthForm isLogin />
      </s.Container>

      <s.ContainerRegister>

        <s.Subtitle>
          <s.Line />
          <s.Text>New to Dinga?</s.Text>
          <s.Line />
        </s.Subtitle>

        <Link to="/app/sign-up">
          <s.ButtonRegister>
            <s.Text>Create your Dinga Account</s.Text>
          </s.ButtonRegister>
        </Link>

      </s.ContainerRegister>
    </>
  );
}
