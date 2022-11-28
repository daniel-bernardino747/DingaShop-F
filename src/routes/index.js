import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import PrivateRoute from './private.routes';
import App from '../App';
import Home, { loader as catalogLoader } from '../pages/Home';
import Login from '../pages/Login';
import Error from '../pages/Error';
import Register from '../pages/Register';
import Auth from '../Auth';
import Header from '../components/Header';
import User, { loader as userLoader } from '../pages/User';
import Cart, { loader as cartLoader } from '../pages/Cart';
import Product, { loader as productLoader } from '../pages/Product';
import Search from '../pages/Search';

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
        path="/search/:name"
        element={<Header><Search /></Header>}
        loader={catalogLoader}
        errorElement={<Error />}
      />
      <Route
        path="product/:id"
        element={<Header><Product /></Header>}
        loader={productLoader}
        errorElement={<Error />}
      />
      <Route
        path="cart"
        element={<PrivateRoute><Header><Cart /></Header></PrivateRoute>}
        loader={cartLoader}
        errorElement={<Error />}
      />
      <Route
        path="/user"
        element={<PrivateRoute><Header><User /></Header></PrivateRoute>}
        loader={userLoader}
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
