import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as s from './style';

export default function BoxCategory({ category, products }) {
  const navigate = useNavigate();
  return (
    <s.Container>
      <s.TitleCategory>{category}</s.TitleCategory>
      <s.ContainerScroll>
        <s.Scroll>
          {products
            .filter((p) => p.product.category.includes(category))
            .map((p) => (
              <s.ToHover>
                <s.Product
                  key={p._id}
                  image={p.product.image}
                />
                <s.Overlay onClick={() => navigate(`product/${p._id}`)}>
                  <s.MoreInformations>
                    <p>{p.product.name}</p>
                  </s.MoreInformations>
                </s.Overlay>
              </s.ToHover>
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
