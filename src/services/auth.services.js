import axios from 'axios';

export async function postSession(body) {
  return axios.post(`http://${process.env.REACT_APP_API}/sign-in`, body)
    .then((answer) => ({ token: answer.data.token, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}

export async function postUser(body) {
  return axios.post(`http://${process.env.REACT_APP_API}/sign-up`, body)
    .then(() => ({ sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}

export async function renewSession(config) {
  return axios.put(`http://${process.env.REACT_APP_API}/session`, {}, config)
    .then((answer) => ({ token: answer.data.token, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
