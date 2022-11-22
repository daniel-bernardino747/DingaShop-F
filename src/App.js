import PropTypes from 'prop-types';

export default function App({ children }) {
  return (
    <>
      <header>
        Oii, sou o header
      </header>
      <div>
        {children}
      </div>
    </>
  );
}
App.propTypes = {
  children: PropTypes.object,
};
