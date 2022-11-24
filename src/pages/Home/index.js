import { useLoaderData } from 'react-router-dom';
import BoxCategory from '../../components/BoxCategory';
import BoxHighlights from '../../components/BoxHighlights';
import categoriesOfCatalog from '../../helpers/functions.helpers';
// import { useContext } from 'react';
import { viewCatalog } from '../../helpers/product.helpers';
// import FilterContext from '../../contexts/filterContext';

export async function loader() {
  const catalog = await viewCatalog();
  return { catalog };
}

export default function Home() {
  // const { filterText } = useContext(FilterContext);
  const { catalog } = useLoaderData();
  const listOfCategories = categoriesOfCatalog(catalog);

  // if (!prod.product.name.includes(filterText)) {
  //   return (
  //     <h1>Nada foi encontrado</h1>
  //   );
  // }

  return (
    <>
      <BoxHighlights products={catalog} />
      <div>
        {listOfCategories.map((category) => (
          <BoxCategory
            key={category}
            category={category}
            products={catalog}
          />
        ))}
      </div>
    </>
  );
}
