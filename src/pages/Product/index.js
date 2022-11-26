// import { useLoaderData } from 'react-router-dom';
import { viewProduct } from '../../helpers/product.helpers';
import * as s from './style';

export async function loader({ params }) {
  return viewProduct(params.id);
}

export default function Product() {
  // const product = useLoaderData();
  return (
    <s.Container>
      {true ? (
        <>
          <s.Box>
            <s.ImageProduct src="" alt="" />
            <s.BoxInfos>
              <div>
                <s.Title>Controle de Carrinho</s.Title>
                <s.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</s.Subtitle>
                <s.RatingStars>
                  <p>⭐⭐⭐⭐⭐</p>
                  {' '}
                  <span>154 ratings</span>
                </s.RatingStars>
              </div>
              <div>
                <s.Title>R$45,40</s.Title>
                <s.BoxButtons>
                  <s.Button>Add to cart</s.Button>
                  <s.ButtonBuy>Buy now</s.ButtonBuy>
                </s.BoxButtons>
              </div>
            </s.BoxInfos>
          </s.Box>
          <s.BoxDetails>
            <s.Title>Description</s.Title>
            <s.Text>bla bla bla bla bla</s.Text>
          </s.BoxDetails>
          <s.BoxDetails>
            <s.Title>Details</s.Title>
            <s.Text>Ble ble ble ble ble</s.Text>
          </s.BoxDetails>
        </>
      ) : (
        <h1>Produto não encontrado</h1>
      )}
    </s.Container>
  );
}
