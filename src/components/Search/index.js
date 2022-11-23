import { useContext } from 'react';
import styled from 'styled-components';
import FilterContext from '../../contexts/filterContext';

export default function Search() {
  const { setFilterText } = useContext(FilterContext);
  return (
    <Searchbar
      placeholder="Pesquisar"
      onChange={(e) => setFilterText(e.target.value)}
    />
  );
}

const Searchbar = styled.input`
width: 559px;
height: 46px;
background: #D9D9D9;
border-radius: 9px;
`;
