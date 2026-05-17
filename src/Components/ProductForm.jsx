import { useEffect, useRef } from "react";

function ProductForm({
  productForm,
  setProductForm,
  handleSubmit,
  isEditing,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-12 col-md-5">
        <input
          ref={inputRef}
          type="text"
          name="title"
          className="form-control"
          placeholder="Ürün Adı"
          value={productForm.title}
          onChange={handleChange}
        />
      </div>

      <div className="col-12 col-md-3">
        <input
          type="text"
          name="category"
          className="form-control"
          placeholder="Kategori"
          value={productForm.category}
          onChange={handleChange}
        />
      </div>

      <div className="col-6 col-md-2">
        <input
          type="number"
          name="stock"
          className="form-control"
          placeholder="Stok"
          value={productForm.stock}
          onChange={handleChange}
        />
      </div>

      <div className="col-6 col-md-2">
        <input
          type="number"
          name="price"
          className="form-control"
          placeholder="Fiyat"
          value={productForm.price}
          onChange={handleChange}
        />
      </div>

      <div className="col-12 d-grid">
        <button
          type="submit"
          className={`btn ${isEditing ? "btn-warning" : "btn-dark"}`}
        >
          {isEditing ? "Ürünü Güncelle" : "Ürün Ekle"}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;