import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// import PrivateRoute from './private.routes';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Error from '../pages/Error';
import Register from '../pages/Register';
import Auth from '../Auth';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={<App><Home /></App>}
        errorElement={<Error />}
      />
      <Route
        path="app/login"
        element={<Auth><Login /></Auth>}
        errorElement={<Error />}
      />
      <Route
        path="app/sign-up"
        element={<Auth><Register /></Auth>}
        errorElement={<Error />}
      />
      <Route
        path="*"
        element={<h1>ERRRORORORORO</h1>}
      />
    </Route>,
  ),
);

export default routers;
