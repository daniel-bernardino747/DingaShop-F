// import { useLoaderData } from 'react-router-dom';
import { viewCatalog } from '../../helpers/product.helpers';

export async function loader() {
  const catalog = await viewCatalog();
  return { catalog };
}

export default function Home() {
  // const { catalog } = useLoaderData();
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
        <h1>Cosmetics (category)</h1>
        <div>
          <div>
            product
            <img src="" alt="" />
          </div>
          <div>
            product
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1>Tools (category)</h1>
        <div>
          <div>
            product
            <img src="" alt="" />
          </div>
          <div>
            product
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
