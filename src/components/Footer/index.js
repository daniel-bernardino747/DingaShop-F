import { Link } from 'react-router-dom';
import * as s from './style';
import logo from '../../assets/image/logo.png';

export default function Footer() {
  return (
    <s.ContainerFooter>
      <s.Footer>
        <s.Content>
          <s.Links>
            <Link style={{ textDecoration: 'none' }} to="/user">
              <h1>User</h1>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/cart">
              <h1>Cart</h1>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/">
              <h1>Home</h1>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/app/login">
              <h1>Login</h1>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/app/sign-up">
              <h1>Register</h1>
            </Link>
          </s.Links>
        </s.Content>
        <Link to="/"><img src={logo} alt="Dinga logo" /></Link>
        <p>
          Made with love by
          {' '}
          <a href="https://github.com/daniel-bernardino747">Dan</a>
          {' '}
          and
          {' '}
          <a href="https://github.com/gbjauhar">Gaby</a>
          . Driven Education 👩‍💻👨‍💻 ©2022-2023
        </p>
      </s.Footer>

    </s.ContainerFooter>
  );
}
