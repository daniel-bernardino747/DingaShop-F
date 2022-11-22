import PropTypes from 'prop-types';

export default function Auth({ children }) {
  return (
    <>
      <header>
        Oii, sou o header do auth
      </header>
      <div>
        {children}
      </div>
    </>
  );
}
Auth.propTypes = {
  children: PropTypes.object,
};
