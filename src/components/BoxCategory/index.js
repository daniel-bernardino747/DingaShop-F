import PropTypes from 'prop-types';
import * as s from './style';

export default function BoxCategory({ category, products }) {
  return (
    <s.Container>
      <s.TitleCategory>{category}</s.TitleCategory>
      <s.ContainerScroll>
        <s.Scroll>
          {products
            .filter((p) => p.product.category.includes(category))
            .map((p) => (
              <div>
                <s.Product key={p._id} image={p.product.image} />
              </div>
            ))}
        </s.Scroll>
      </s.ContainerScroll>
    </s.Container>
  );
}
BoxCategory.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
};
