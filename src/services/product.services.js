import axios from 'axios';

export async function getProduct(id) {
  return axios.get(`http://${process.env.REACT_APP_API}/product/${id}`)
    .then((product) => ({ product, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
export async function getCatalog() {
  return axios.get(`http://${process.env.REACT_APP_API}/products`)
    .then((answer) => ({ catalog: answer.data.catalog, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
