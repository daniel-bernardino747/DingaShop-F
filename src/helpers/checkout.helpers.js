import Swal from 'sweetalert2';
import postPurchase from '../services/purchase.services';

export default async function finalizeCheckout(body) {
  const token = window.localStorage.getItem('dinga.token');
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  return postPurchase(body, config)
    .then((reply) => {
      if (reply.sucess) {
        Swal.fire({
          icon: 'success',
          title: 'Completed Purchase',
        });
        return reply.sucess;
      }
      console.log(reply.error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'There was an error making your purchase, please try again later.',
        footer: `Server error: ${reply.error.response.data}`,
      });
      return reply.sucess;
    });
}
