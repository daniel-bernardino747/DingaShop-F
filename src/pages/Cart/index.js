import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import * as s from './style';
import { removeProductToCart, viewCart } from '../../helpers/cart.helpers';
import close from '../../assets/image/fa-solid_window-close.svg';
import Checkout from '../../components/Checkout';

export async function loader() {
  const cart = await viewCart();
  return { cart };
}

export default function Cart() {
  const { cart } = useLoaderData();
  const userCart = cart.data.cart;
  const catalog = cart.data.catalog;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <s.ContainerPage>
      <s.Upper>
        <h1>Cart</h1>
        <button type="button" onClick={() => setModalIsOpen(true)}>Buy all</button>
        <Checkout
          modalIsOpen={modalIsOpen}
          userCart={userCart}
          catalog={catalog}
          setModalIsOpen={setModalIsOpen}
        />
      </s.Upper>
      <div>
        {userCart.map((c) => (
          catalog.map((p) => (c.idProduct === p._id
            ? (
              <s.ContainerProduct>
                <s.Info>
                  <img src={p.product.image} alt="" />
                  <h1>{p.product.name}</h1>
                </s.Info>
                <div onClick={() => removeProductToCart(p.product.name, c._id)}>
                  X

                </div>
              </s.ContainerProduct>
            )
            : <></>))))}

      </div>

    </s.ContainerPage>
  );
}
