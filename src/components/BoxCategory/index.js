import PropTypes from 'prop-types';

export default function BoxCategory({ category, products }) {
  return (
    <div>
      <h1>{category}</h1>
      <div style={{ display: 'flex' }}>
        {products
          .filter((p) => p.product.category.includes(category))
          .map((p) => (
            <div key={p._id}>
              <img src={p.product.image} alt={p.product.name} style={{ width: '10em' }} />
            </div>
          ))}
      </div>
    </div>
  );
}
BoxCategory.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
};
