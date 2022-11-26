import { useLoaderData } from 'react-router-dom';
import { addProductToCart } from '../../helpers/cart.helpers';
import { viewProduct } from '../../helpers/product.helpers';
import formatInReal from '../../Utils/format.util';
import * as s from './style';

export async function loader({ params }) {
  return viewProduct(params.id);
}

export default function Product() {
  const [{ _id, product }] = useLoaderData();
  return (
    <s.Container>
      <s.Box>
        <s.ImageProduct src={product.image} alt={product.name} />
        <s.BoxInfos>
          <div>
            <s.Title>{product.name}</s.Title>
            {product.subtitle && (
            <s.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</s.Subtitle>
            )}
            {product.review && (
            <s.RatingStars>
              <p>⭐⭐⭐⭐⭐</p>
              {' '}
              <span>154 ratings</span>
            </s.RatingStars>
            )}
          </div>
          <div>
            <s.Title>{formatInReal(product.cost)}</s.Title>
            <s.BoxButtons>
              <s.Button onClick={() => addProductToCart(_id)}>Add to cart</s.Button>
              <s.ButtonBuy onClick={() => alert('quero comprar')}>Buy now</s.ButtonBuy>
            </s.BoxButtons>
          </div>
        </s.BoxInfos>
      </s.Box>
      {product.description && (
      <s.BoxDetails>
        <s.Title>Description</s.Title>
        <s.Text>{product.description}</s.Text>
      </s.BoxDetails>
      )}
      {product.details && (
      <s.BoxDetails>
        <s.Title>Details</s.Title>
        <s.Text>{product.details}</s.Text>
      </s.BoxDetails>
      )}
    </s.Container>
  );
}
