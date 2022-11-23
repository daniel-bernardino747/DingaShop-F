import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Search({ setFilterText }) {
  return (
    <Searchbar
      placeholder="Pesquisar"
      onChange={(e) => setFilterText(e.target.value)}
    />
  );
}

Search.propTypes = {
  setFilterText: PropTypes.object,
};

const Searchbar = styled.input`
width: 559px;
height: 46px;
background: #D9D9D9;
border-radius: 9px;
`;
