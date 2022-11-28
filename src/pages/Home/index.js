import { useLoaderData } from 'react-router-dom';
import BoxCategory from '../../components/BoxCategory';
import BoxHighlights from '../../components/BoxHighlights';
import Footer from '../../components/Footer';
import { viewCatalog } from '../../helpers/product.helpers';
import categoriesOfCatalog from '../../Utils/filter.util';

export async function loader() {
  const catalog = await viewCatalog();
  return { catalog };
}

export default function Home() {
  const { catalog } = useLoaderData();
  const listOfCategories = categoriesOfCatalog(catalog);

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
      <Footer />
    </>
  );
}
