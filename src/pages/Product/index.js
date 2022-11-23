// import { useLoaderData } from 'react-router-dom';
import { viewProduct } from '../../helpers/product.helpers';

export async function loader({ params }) {
  return viewProduct(params.id);
}

export default function Product() {
  // const product = useLoaderData();

  return (
    <div>
      {true ? (
        <>
          <div>
            <img src="" alt="" />
            <div>
              <div>
                <h1>Controle de Carrinho</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div> estrelinhas 154 ratings</div>
              </div>
              <div>
                <h1>Price: R$45,40</h1>
                <button type="button">Add to cart</button>
                <button type="button">Buy now</button>
              </div>
            </div>
          </div>
          <div>
            <h1>Description</h1>
            <p>bla bla bla bla bla</p>
          </div>
          <div>
            <h1>Details</h1>
            <p>Ble ble ble ble ble</p>
          </div>
        </>
      ) : (
        <h1>Produto não encontrado</h1>
      )}
    </div>
  );
}
