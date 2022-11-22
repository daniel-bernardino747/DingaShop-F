import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/image/logo.png';
import user from '../../assets/image/UserPerfil.png';
import Search from '../Search';

export default function Header({ children }) {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <Search />
        <Link to="/cart">
          <CartPic src={user} alt="user" />
        </Link>
        <Link to="/user">
          <UserPic />
        </Link>
      </HeaderContainer>
      <div>
        {children}
      </div>
    </>
  );
}

Header.propTypes = {
  children: PropTypes.object,
};

const HeaderContainer = styled.div`
display:flex;
width: 100%;
height: 118px;
background-color: #434343;
justify-content: space-evenly;
align-items: center;
`;

const Logo = styled.img`
width: 165px;
height: 62.3px;
`;

const CartPic = styled.img`
width: 64px;
height: 54.72px;
`;

const UserPic = styled.div`
width: 64px;
height: 64px;
background: #D9D9D9;
border-radius:50%;
`;
