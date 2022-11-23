import Swal from 'sweetalert2';
import { deleteProductToCart, getCart, putProductToCart } from '../services/cart.services';

export async function viewCart() {
  const token = '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return getCart(config)
    .then((reply) => {
      if (reply.sucess) {
        return reply.cart;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We have a problem to show your cart',
        footer: `Server error: ${reply.error}`,
      });
      return reply.sucess;
    });
}

export async function addProductToCart(id) {
  const token = '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return putProductToCart(id, config)
    .then((reply) => {
      if (reply.sucess) {
        Swal.fire({
          icon: 'sucess',
          title: 'Sucess',
          text: 'Your cart has been successfully updated',
        });
        return reply.message;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We have a problem to update your cart',
        footer: `Server error: ${reply.error}`,
      });
      return reply.sucess;
    });
}

export async function removeProductToCart(name, id) {
  const confirm = window.confirm(`Are you sure you want to remove ${name} from the cart?`);
  if (!confirm) return false;

  const token = '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return deleteProductToCart(id, config)
    .then((reply) => {
      if (reply.sucess) {
        Swal.fire({
          icon: 'sucess',
          title: 'Sucess',
          text: `The ${name} has been deleted`,
        });
        return reply.message;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We have a problem to update your cart',
        footer: `Server error: ${reply.error}`,
      });
      return reply.sucess;
    });
}
