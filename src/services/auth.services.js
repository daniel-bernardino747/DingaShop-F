import axios from 'axios';

export async function postSession(body) {
  return axios.post(`http://${process.env.REACT_APP_API}/sign-in`, body)
    .then((token) => ({ token, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}

export async function postUser(body) {
  return axios.post(`http://${process.env.REACT_APP_API}/sign-up`, body)
    .then(() => ({ sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
