import PropTypes from 'prop-types';
import logo from '../../assets/image/logo.png';

export default function Header({ children }) {
  return (
    <>
      <img src={logo} alt="logo" />
      <div>
        {children}
      </div>
    </>
  );
}

Header.propTypes = {
  children: PropTypes.object,
};
