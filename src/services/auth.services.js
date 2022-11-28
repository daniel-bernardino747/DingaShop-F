import axios from 'axios';

export async function postSession(body) {
  return axios.post(`https://${process.env.REACT_APP_API}/sign-in`, body)
    .then((answer) => ({ data: answer.data, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function postUser(body) {
  return axios.post(`https://${process.env.REACT_APP_API}/sign-up`, body)
    .then(() => ({ sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function renewSession(config) {
  return axios.put(`https://${process.env.REACT_APP_API}/session`, {}, config)
    .then((answer) => ({ data: answer.data, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function deleteSession(config) {
  return axios.delete(`https://${process.env.REACT_APP_API}/session`, config)
    .then(() => ({ sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function getUserPerfil(config) {
  return axios.get(`https://${process.env.REACT_APP_API}/user`, config)
    .then((user) => ({ data: user.data, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
