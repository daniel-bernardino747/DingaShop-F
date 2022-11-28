import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export const CheckoutContext = createContext();

export function CheckoutContextProvider({ children }) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const token = window.localStorage.getItem('dinga.token');
  useEffect(() => {
    const noAuthorization = checkoutOpen === true && token === null;
    if (noAuthorization) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to be logged in for this.',
      });
      setCheckoutOpen(false);
    }
  });
  return (
    <CheckoutContext.Provider value={{ checkoutOpen, setCheckoutOpen }}>
      {children}
    </CheckoutContext.Provider>
  );
}
CheckoutContextProvider.propTypes = {
  children: PropTypes.any,
};
