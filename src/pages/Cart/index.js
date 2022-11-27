import { Link, useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import * as s from './style';
import { removeProductToCart, viewCart } from '../../helpers/cart.helpers';
import Checkout from '../../components/Checkout';
import { CheckoutContext } from '../../contexts/checkout.context';
import formatInReal from '../../Utils/format.util';
import Footer from '../../components/Footer';

export async function loader() {
  const cart = await viewCart();
  return { cart };
}

export default function Cart() {
  const { cart } = useLoaderData();
  const { setCheckoutOpen } = useContext(CheckoutContext);
  console.log('cart', cart.data);
  const userCart = cart.data;

  return (
    <>
      <s.ContainerPage>
        <Checkout cart={userCart} />
        <s.Upper>
          <h1>Cart</h1>
          <button type="button" onClick={() => setCheckoutOpen(true)}>Buy all</button>
        </s.Upper>
        <div>
          {userCart.map((p) => (
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
              {/* eslint-disable-next-line */}
            <p onClick={() => removeProductToCart(p.product.name, p.idCart)}>
              X

            </p>
            </s.ContainerProduct>
          ))}
        </div>

      </s.ContainerPage>
      <Footer />
    </>
  );
}
