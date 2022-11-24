import PropTypes from 'prop-types';

export default function BoxHighlights({ products }) {
  const haveHighlihts = products.filter((p) => p.product.category.includes('highlight')).length > 0;
  return (
    haveHighlihts ? (
      <div>
        <div style={{ display: 'flex' }}>
          {products
            .filter((p) => p.product.category.includes('highlight'))
            .map((p) => (
              <div key={p._id}>
                <img src={p.product.image} alt={p.product.name} style={{ width: '10em' }} />
              </div>
            ))}
        </div>
      </div>
    ) : (
      <h1>Aoba, por enquanto não temos nada em destaque</h1>
    )
  );
}
BoxHighlights.propTypes = {
  products: PropTypes.array,
};
