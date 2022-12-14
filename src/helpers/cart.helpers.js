import Swal from 'sweetalert2';
import { deleteProductToCart, getCart, putProductToCart } from '../services/cart.services';

export async function viewCart() {
  const token = window.localStorage.getItem('dinga.token');
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  if (token === null) {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You need to be logged in for this.',
    });
    return false;
  }
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

export async function addProductToCart(idProduct) {
  const token = window.localStorage.getItem('dinga.token');
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  if (token === null) {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You need to be logged in for this.',
    });
    return false;
  }
  return putProductToCart(idProduct, config)
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

export async function removeProductToCart(name, idCart) {
  const confirm = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      return true;
    }
    return false;
  });
  if (!confirm) return false;

  const token = window.localStorage.getItem('dinga.token');
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  if (token === null) {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You need to be logged in for this.',
    });
    return false;
  }
  return deleteProductToCart(idCart, config)
    .then(async (reply) => {
      if (reply.sucess) {
        await Swal.fire(
          'Deleted!',
          `The ${name} has been deleted to cart.`,
          'success',
        );
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
