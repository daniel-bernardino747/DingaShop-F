import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import * as s from './style';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { viewProduct } from '../../helpers/product.helpers';

export default function BoxHighlights({ products }) {
  const highlights = products.filter((p) => p.product.category.includes('highlight'));
  const haveHighlights = highlights.length > 0;
  const navigate = useNavigate();

  function showProductInHighlight(position) {
    const idProduct = highlights[position]._id;
    navigate(`product/${idProduct}`);
  }

  return (
    haveHighlights && (
      <s.Container>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows
          showStatus={false}
          showThumbs={false}
          width="20em"
          onClickItem={(p) => showProductInHighlight(p)}
        >
          {highlights.map((p) => (
            <div key={p._id}>
              <img src={p.product.image} alt={p.product.name} />
            </div>
          ))}
        </Carousel>
      </s.Container>
    )
  );
}
BoxHighlights.propTypes = {
  products: PropTypes.array,
};
