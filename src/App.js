import { Outlet } from 'react-router-dom';
import ResetCSS from './assets/global.style';
import { CheckoutContextProvider } from './contexts/checkout.context';

export default function App() {
  return (
    <>
      <ResetCSS />
      <CheckoutContextProvider>
        <Outlet />
      </CheckoutContextProvider>
    </>
  );
}
