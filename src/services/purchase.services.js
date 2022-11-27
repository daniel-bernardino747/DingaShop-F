import axios from 'axios';

export default async function postPurchase(body, config) {
  return axios.post(`http://${process.env.REACT_APP_API}/purchase`, body, config)
    .then((message) => ({ message, sucess: true }))
    .catch((error) => ({ error, sucess: false }));
}
