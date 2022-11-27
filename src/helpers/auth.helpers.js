import Swal from 'sweetalert2';
import {
  getUserPerfil, postSession, postUser, renewSession,
} from '../services/auth.services';

export async function loginHelper(body) {
  const existingToken = window.localStorage.getItem('dinga.token');
  if (existingToken && existingToken !== 'undefined') {
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(existingToken)}`,
      },
    };
    return renewSession(config).then((reply) => {
      if (reply.sucess) {
        window.localStorage.setItem('dinga.token', JSON.stringify(reply.data.token));
        window.localStorage.setItem('dinga.user', JSON.stringify(reply.data.user));
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
        window.localStorage.setItem('dinga.token', JSON.stringify(reply.data.token));
        window.localStorage.setItem('dinga.user', JSON.stringify(reply.data.user));
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
export async function viewUserPerfil() {
  const token = window.localStorage.getItem('dinga.token');
  const config = {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  };
  return getUserPerfil(config)
    .then((reply) => {
      if (reply.sucess) {
        return reply.data;
      }
      console.log(reply.error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We were unable to view your perfil user.',
        footer: `Server error: ${reply.error.response.data.error}`,
      });
      return reply.sucess;
    });
}
