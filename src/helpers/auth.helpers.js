import Swal from 'sweetalert2';
import { postSession, postUser } from '../services/auth.services';

export async function loginHelper(body) {
  return postSession(body)
    .then((reply) => {
      if (reply.sucess) {
        window.localStorage.setItem('dinga.token', reply.token);
        return reply.sucess;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We were unable to login to the server',
        footer: `Server error: ${reply.error}`,
      });
      return reply.sucess;
    });
}
export async function registerHelper(data) {
  const body = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  return postUser(body)
    .then((reply) => {
      if (!reply.sucess) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'We were unable to login to the server',
          footer: `Server error: ${reply.error}`,
        });
      }
      return reply.sucess;
    });
}
