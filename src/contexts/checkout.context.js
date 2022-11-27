import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CheckoutContext = createContext();

export function CheckoutContextProvider({ children }) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <CheckoutContext.Provider value={{ checkoutOpen, setCheckoutOpen }}>
      {children}
    </CheckoutContext.Provider>
  );
}
CheckoutContextProvider.propTypes = {
  children: PropTypes.any,
};
