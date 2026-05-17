function ProductItem({ task, handleDelete, handleEdit }) {
  return (
    <li className="list-group-item border rounded-3 mb-3 shadow-sm p-3">
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
        <div className="flex-grow-1">
          <h4 className="mb-3 fw-bold text-dark">
            {task.title}
          </h4>

          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-secondary px-3 py-2">
              Kategori: {task.category}
            </span>

            <span className="badge bg-success px-3 py-2">
              Stok: {task.stock} Adet
            </span>

            <span className="badge bg-dark px-3 py-2">
              Fiyat: ₺{task.price}
            </span>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => handleEdit(task)}
          >
            Düzenle
          </button>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => handleDelete(task.id)}
          >
            Sil
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;