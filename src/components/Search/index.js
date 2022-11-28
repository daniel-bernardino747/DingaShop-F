import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Searchbar } from '../Header/style';
import FilterContext from '../../contexts/filterContext';

export default function Search() {
  const { filterText, setFilterText } = useContext(FilterContext);
  const navigate = useNavigate();

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      navigate(`/search/${filterText}`);
    }
  }

  return (
    <Searchbar
      placeholder="Pesquisar"
      onChange={(e) => setFilterText(e.target.value)}
      /* eslint-disable-next-line */
      onKeyPress={handleKeyPress}
    />
  );
}
