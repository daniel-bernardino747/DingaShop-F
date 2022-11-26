export default function categoriesOfCatalog(data) {
  const categories = [];
  data.forEach((prod) => {
    for (let i = 0; i < prod.product.category.length; i += 1) {
      if (prod.product.category[i] === 'highlight') {
        return true;
      } if (!categories.includes(prod.product.category[i])) {
        categories.push(prod.product.category[i]);
        return true;
      }
    }
    return true;
  });
  return categories;
}
