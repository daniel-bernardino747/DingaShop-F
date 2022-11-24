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
  return (
    <FilterContext.Provider value={{ filterText, setFilterText }}>
      <s.Container>
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
            <Link to="/user">
              <BsFillPersonFill style={s.IconCSS} />
            </Link>
          </s.BoxIcons>
        </s.Header>
      </s.Container>
      <div>
        {children}
      </div>
    </FilterContext.Provider>
  );
}
Header.propTypes = {
  children: PropTypes.object,
};
