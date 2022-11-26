import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi2';
import { BsFillPersonFill } from 'react-icons/bs';
import logo from '../../assets/image/logo.png';
import Search from '../Search';
import FilterContext from '../../contexts/filterContext';
import * as s from './style';

export default function Header({ children }) {
  const [filterText, setFilterText] = useState('');

  const userActive = !!window.localStorage.getItem('dinga.token')
  && !!window.localStorage.getItem('dinga.user');
  const user = userActive ? JSON.parse(window.localStorage.getItem('dinga.user')) : '';

  return (
    <FilterContext.Provider value={{ filterText, setFilterText }}>
      <s.ContainerHeader>
        <s.Header>
          <s.Box>
            <Link to="/">
              <s.Logo src={logo} alt="logo" />
            </Link>
            <Search />
          </s.Box>
          <s.BoxIcons>
            <Link to="/cart">
              <HiShoppingCart style={s.IconCSS} />
            </Link>
            <Link to={userActive ? '/user' : '/app/login'}>
              {(userActive && user.image) ? (
                <s.Icon src={user.image} alt={user.name} />
              ) : (
                <BsFillPersonFill style={s.IconCSS} />
              )}
            </Link>
          </s.BoxIcons>
        </s.Header>
      </s.ContainerHeader>
      <s.Container>
        {children}
      </s.Container>
    </FilterContext.Provider>
  );
}
Header.propTypes = {
  children: PropTypes.object,
};
