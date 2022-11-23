// import { useLoaderData } from 'react-router-dom';
import { viewCart } from '../../helpers/cart.helpers';

export async function loader() {
  const cart = await viewCart();
  return { cart };
}

export default function Cart() {
  // const { cart } = useLoaderData();
  return (
    <>
      <div>
        <h1>Cart</h1>
        <button type="button">Buy all</button>
      </div>
      <div>
        <div>
          <div>
            <img src="" alt="" />
            <h1>Fazedor de criança dormir</h1>
          </div>
          <div>X</div>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <h1>Fazedor de criança dormir</h1>
          </div>
          <div>X</div>
        </div>
      </div>
    </>
  );
}
