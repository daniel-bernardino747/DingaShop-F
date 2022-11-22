import Swal from 'sweetalert2';
import { getProduct } from '../services/product.services';

export async function viewProduct(id) {
  const token = '';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return getProduct(id, config).then((reply) => {
    if (reply.sucess) {
      return reply.product;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'We were unable to show the selected product',
      footer: `Server error: ${reply.error}`,
    });
    return reply.sucess;
  });
}
export async function addProductToCart() {}
