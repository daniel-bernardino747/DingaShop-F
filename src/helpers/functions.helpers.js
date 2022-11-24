export default function categoriesOfCatalog(data) {
  let lastCategory;
  const categories = [];
  data.forEach((prod) => {
    for (let i = 0; i < prod.product.category.length; i += 1) {
      if (prod.product.category[i] === 'highlight') {
        return true;
      } if (prod.product.category[i] !== lastCategory) {
        categories.push(prod.product.category[i]);
        lastCategory = prod.product.category[i];
        return true;
      }
    }
    return true;
  });
  return categories;
}
