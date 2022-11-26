import styled from 'styled-components';
import COLOR from '../../constants/colors.constants';

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
export const BoxIcons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1em;
`;
export const Container = styled.div`
  margin-top: 5em;
  width: clamp(21em, 100vw, 70em);
  padding: 0 2em;
`;
export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
`;
export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 4em;
  background-color: #434343;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
`;
export const IconCSS = {
  width: '2.5em',
  height: '2.5em',
  borderRadius: '0.5em',
  fill: COLOR.GRAY_217,
};
export const Logo = styled.img`
  width: 6em;
`;
export const Searchbar = styled.input`
  width: 21em;
  height: 2.5em;
  background: #D9D9D9;
  border-radius: .5em;
  padding: 1em;
  border: none;
  outline: none;
  transition: box-shadow .3s;
  &&:focus, &&:hover {
    box-shadow: 0 0 0.7em ${COLOR.GRAY_217o3}; 
  }
`;

export default Searchbar;
