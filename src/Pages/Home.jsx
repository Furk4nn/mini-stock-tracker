import ProductForm from "../Components/ProductForm";
import ProductList from "../Components/ProductList";
import ErrorMessage from "../Components/ErrorMessage";
import { useProducts } from "../hooks/useProducts";

function Home() {
  const {
    tasks,
    productForm,
    setProductForm,
    editId,
    error,
    handleSubmit,
    handleDelete,
    handleEdit,
  } = useProducts();

  return (
    <div className="app-wrapper">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card border-0 shadow-lg app-card">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-5">
                  <h1 className="fw-bold display-5 mb-3">
                    📦 Mini Stock Tracker
                  </h1>

                  <p className="text-muted fs-5">
                    Ürün ekleme, stok kontrolü ve ürün yönetim sistemi
                  </p>

                  <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
                    <div className="badge text-bg-dark px-4 py-3">
                      Toplam Ürün: {tasks.length}
                    </div>

                    <div className="badge text-bg-success px-4 py-3">
                      Aktif Stok
                    </div>

                    <div className="badge text-bg-primary px-4 py-3">
                      Yönetim Paneli
                    </div>
                  </div>
                </div>

                <ProductForm
                  productForm={productForm}
                  setProductForm={setProductForm}
                  handleSubmit={handleSubmit}
                  isEditing={editId !== null}
                />

                <ErrorMessage message={error} />

                <div className="mt-4">
                  <ProductList
                    tasks={tasks}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;