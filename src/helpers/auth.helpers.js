import Swal from 'sweetalert2';
import { postSession, postUser, renewSession } from '../services/auth.services';

export async function loginHelper(body) {
  const existingToken = window.localStorage.getItem('dinga.token');

  if (existingToken) {
    const config = {
      headers: {
        Authorization: `Bearer ${existingToken}`,
      },
    };
    return renewSession(config).then((reply) => {
      if (reply.sucess) {
        window.localStorage.setItem('dinga.token', reply.token);
        return reply.sucess;
      }
      console.log(reply.error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We were unable to login to the server',
        footer: `Server error: ${reply.error.response.data.error}`,
      });
      return reply.sucess;
    });
  }
  return postSession(body)
    .then((reply) => {
      if (reply.sucess) {
        window.localStorage.setItem('dinga.token', reply.token);
        return reply.sucess;
      }
      console.log(reply.error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We were unable to login to the server',
        footer: `Server error: ${reply.error.response.data.error}`,
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
        console.log(reply.error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'We were unable to register your username on the server.',
          footer: `Server error: ${reply.error.response.data.error}`,
        });
      }
      return reply.sucess;
    });
}
