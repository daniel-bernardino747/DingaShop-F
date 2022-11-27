import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import * as s from './style';
import { removeProductToCart, viewCart } from '../../helpers/cart.helpers';
import Checkout from '../../components/Checkout';

export async function loader() {
  const cart = await viewCart();
  return { cart };
}

export default function Cart() {
  const { cart } = useLoaderData();
  console.log('cart', cart.data);
  const userCart = cart.data;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <s.ContainerPage>
      <Checkout
        modalIsOpen={modalIsOpen}
        userCart={userCart}
        setModalIsOpen={setModalIsOpen}
      />
      <s.Upper>
        <h1>Cart</h1>
        <button type="button" onClick={() => setModalIsOpen(true)}>Buy all</button>
      </s.Upper>
      <div>
        {userCart.map((p) => (
          <s.ContainerProduct>
            <s.Info>
              <img src={p.product.image} alt="" />
              <h1>{p.product.name}</h1>
            </s.Info>
            <div onClick={() => removeProductToCart(p.product.name, c._id)}>
              X

            </div>
          </s.ContainerProduct>
        ))}
      </div>

    </s.ContainerPage>
  );
}
