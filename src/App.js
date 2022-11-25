import { Outlet } from 'react-router-dom';
import ResetCSS from './assets/global.style';

export default function App() {
  return (
    <>
      <ResetCSS />
      <Outlet />
    </>
  );
}
