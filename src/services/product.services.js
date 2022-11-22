import axios from 'axios';

export async function getProduct(id, config) {
  return axios.get(`url/:${id}`, config)
    .then((product) => ({ product, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function getCatalog(config) {
  return axios.get('url', config)
    .then((catalog) => ({ catalog, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
