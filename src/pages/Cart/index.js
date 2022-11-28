import { Link, useLoaderData } from 'react-router-dom';
import { useContext, useState } from 'react';
import * as s from './style';
import { removeProductToCart, viewCart } from '../../helpers/cart.helpers';
import Checkout from '../../components/Checkout';
import { CheckoutContext } from '../../contexts/checkout.context';
import formatInReal from '../../Utils/format.util';
import Footer from '../../components/Footer';
import { sumOfCost } from '../../Utils/filter.util';

export async function loader() {
  const cart = await viewCart();
  return { cart };
}

export default function Cart() {
  const { cart } = useLoaderData();
  const { setCheckoutOpen } = useContext(CheckoutContext);
  const [userCart, setUserCart] = useState(cart.data);
  function removeProduct(name, idCart) {
    removeProductToCart(name, idCart)
      .then((ans) => {
        if (ans.data === 'OK') {
          window.location.reload();
        }
      });
  }
  return (
    <>
      <s.ContainerPage>
        <Checkout cart={userCart} />
        <s.Upper>
          <s.Title>
            <h1>Cart</h1>
            <h2>
              Total:
              {' '}
              {formatInReal(sumOfCost(userCart))}
            </h2>
          </s.Title>
          <button type="button" onClick={() => setCheckoutOpen(true)}>Buy all</button>
        </s.Upper>
        <div>
          {cart.data.map((p) => (
            <s.ContainerProduct>
              <s.Info>
                <img src={p.product.image} alt="" />
                <s.NamePrice>
                  <Link style={{ textDecoration: 'none' }} to={`/product/${p._id}`}>
                    <h1>{p.product.name}</h1>
                  </Link>
                  <h2>{formatInReal(p.product.cost)}</h2>
                </s.NamePrice>
              </s.Info>
              <s.Actions>
                {/* eslint-disable-next-line */}
            <h1 onClick={() => removeProduct(p.product.name, p.idCart)}>X</h1>
                {/* eslint-disable-next-line */}
                <p onClick={() => {setCheckoutOpen(true), setUserCart([p])}}>Buy this</p>
              </s.Actions>
            </s.ContainerProduct>
          ))}
        </div>

      </s.ContainerPage>
      <Footer />
    </>
  );
}
