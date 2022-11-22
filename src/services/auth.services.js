import axios from 'axios';

export async function postSession(body) {
  return axios.post('url', body)
    .then((token) => ({ token, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}

export async function postUser(body) {
  return axios.post('url', body)
    .then(() => ({ sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
