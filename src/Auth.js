import PropTypes from 'prop-types';
import ResetCSS, { AuthContainer } from './assets/global.style';
import lightLogo from './assets/image/logo-lightbg.svg';

export default function Auth({ children }) {
  return (
    <>
      <ResetCSS />
      <AuthContainer>
        <header>
          <img src={lightLogo} alt="logo" />
        </header>
        {children}
      </AuthContainer>
    </>
  );
}
Auth.propTypes = {
  children: PropTypes.object,
};
