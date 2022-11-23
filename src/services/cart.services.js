import axios from 'axios';

export async function putProductToCart(id, config) {
  return axios.put(`url/${id}`, config)
    .then((message) => ({ message, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function deleteProductToCart(id, config) {
  return axios.delete(`url/${id}`, config)
    .then((message) => ({ message, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
