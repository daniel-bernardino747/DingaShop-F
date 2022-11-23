// import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { viewCatalog } from '../../helpers/product.helpers';
import PRODUCTS from '../../components/Search/mock';
import FilterContext from '../../contexts/filterContext';

export async function loader() {
  const catalog = await viewCatalog();
  return { catalog };
}

export default function Home() {
  const { filterText } = useContext(FilterContext);
  // const { catalog } = useLoaderData();
  let lastCategory;
  const layout = [];
  // eslint-disable-next-line
  PRODUCTS.forEach((prod) => {
    if (!prod.nome.includes(filterText)) {
      return (
        <h1>Nada foi encontrado</h1>
      );
    }
    if (prod.categoria !== lastCategory) {
      layout.push(<div className="product-category">{prod.categoria}</div>);
      lastCategory = prod.categoria;
    }
    layout.push(<h2>{prod.nome}</h2>);
  });
  return (
    <>
      <div>
        <button type="button"> seta- </button>
        <div>
          highlights
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <button type="button"> seta+ </button>
      </div>
      <div>
        {layout}
      </div>
    </>
  );
}
