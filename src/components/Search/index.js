import styled from 'styled-components';

export default function Search() {
  return (
    <Searchbar placeholder="Pesquisar" />
  );
}

const Searchbar = styled.input`
width: 559px;
height: 46px;
background: #D9D9D9;
border-radius: 9px;
`;
