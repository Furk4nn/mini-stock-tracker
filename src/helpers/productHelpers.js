export function createProduct(productForm) {
  return {
    id: Date.now(),
    title: productForm.title.trim(),
    category: productForm.category.trim(),
    stock: productForm.stock,
    price: productForm.price,
  };
}

export function addProduct(products, newProduct) {
  return [...products, newProduct];
}

export function deleteProduct(products, id) {
  return products.filter((product) => product.id !== id);
}

export function updateProduct(products, editId, productForm) {
  return products.map((product) =>
    product.id === editId
      ? {
          ...product,
          title: productForm.title.trim(),
          category: productForm.category.trim(),
          stock: productForm.stock,
          price: productForm.price,
        }
      : product
  );
}