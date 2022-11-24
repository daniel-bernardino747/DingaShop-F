import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// import PrivateRoute from './private.routes';
import App from '../App';
import Home, { loader as catalogLoader } from '../pages/Home';
import Login from '../pages/Login';
import Error from '../pages/Error';
import Register from '../pages/Register';
import Auth from '../Auth';
import Header from '../components/Header';
import User from '../pages/User';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
// import Product, { loader as productLoader } from '../pages/Product';

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={<Header><Home /></Header>}
        loader={catalogLoader}
        errorElement={<Error />}
      />
      <Route
        path="product/:id"
        element={<Header><Product /></Header>}
        // loader={productLoader}
        errorElement={<Error />}
      />
      <Route
        path="cart"
        element={<Header><Cart /></Header>}
        // loader={productLoader}
        errorElement={<Error />}
      />
      <Route
        path="/user"
        element={<Header><User /></Header>}
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
