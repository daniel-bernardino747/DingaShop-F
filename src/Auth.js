import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AuthContainer } from './assets/global.style';
import lightLogo from './assets/image/logo-lightbg.svg';

export default function Auth({ children }) {
  return (
    <AuthContainer>
      <header>
        <Link to="/">
          <img src={lightLogo} alt="logo" />
        </Link>
      </header>
      {children}
    </AuthContainer>
  );
}
Auth.propTypes = {
  children: PropTypes.object,
};
