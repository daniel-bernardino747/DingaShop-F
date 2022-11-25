import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import * as s from './style';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function BoxHighlights({ products }) {
  const haveHighlihts = products.filter((p) => p.product.category.includes('highlight')).length > 0;
  const showProductInHighlight = () => alert('product');

  return (
    haveHighlihts && (
      <s.Container>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows
          showStatus={false}
          showThumbs={false}
          width="20em"
          onClickItem={showProductInHighlight}
        >
          {products
            .filter((p) => p.product.category.includes('highlight'))
            .map((p) => (
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
