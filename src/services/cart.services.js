import axios from 'axios';

export async function getCart(config) {
  return axios.get(`http://${process.env.REACT_APP_API}/cart`, config)
    .then((cart) => ({ cart, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function putProductToCart(id, config) {
  return axios.put(`http://${process.env.REACT_APP_API}/cart/${id}`, config)
    .then((message) => ({ message, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function deleteProductToCart(id, config) {
  return axios.delete(`http://${process.env.REACT_APP_API}/cart/${id}`, config)
    .then((message) => ({ message, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
