import axios from 'axios';

export async function getProduct(id, config) {
  return axios.get(`url/:${id}`, config)
    .then((product) => ({ product, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
