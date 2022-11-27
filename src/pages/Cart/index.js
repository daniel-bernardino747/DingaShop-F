import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import * as s from './style';
import { removeProductToCart, viewCart } from '../../helpers/cart.helpers';
import Checkout from '../../components/Checkout';
import formatInReal from '../../Utils/format.util';

export async function loader() {
  const cart = await viewCart();
  return { cart };
}

export default function Cart() {
  const { cart } = useLoaderData();
  console.log(cart.data);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <s.ContainerPage>
      <s.Upper>
        <h1>Cart</h1>
        <button type="button" onClick={() => setModalIsOpen(true)}>Buy all</button>
        <Checkout
          modalIsOpen={modalIsOpen}
          cart={cart.data}
          setModalIsOpen={setModalIsOpen}
        />
      </s.Upper>
      <s.ContainerList>
        {cart.data.map((c) => (
          cart.data ? (
            <s.ContainerProduct>
              <s.Info>
                <img src={c.product.image} alt="" />
                <s.NamePrice>
                  <h1>{c.product.name}</h1>
                  <h2>{formatInReal(c.product.cost)}</h2>
                </s.NamePrice>
              </s.Info>
              <s.Actions>

                <h1 onClick={() => removeProductToCart(c.product.name, c.idCart)}>X</h1>
                <p>Comprar só esse</p>
              </s.Actions>
            </s.ContainerProduct>
          )
            : <></>))}

      </s.ContainerList>

    </s.ContainerPage>
  );
}
