import { useContext } from 'react';
import Searchbar from '../Header/style';
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
