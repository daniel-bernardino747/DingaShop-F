import Swal from 'sweetalert2';
import { getCatalog, getProduct } from '../services/product.services';

export async function viewCatalog() {
  return getCatalog().then((reply) => {
    if (reply.sucess) {
      return reply.catalog;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'We were unable to show the catalog',
      footer: `Server error: ${reply.error}`,
    });
    return reply.sucess;
  });
}
export async function viewProduct(id) {
  // const token = '';
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  return getProduct(id).then((reply) => {
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
