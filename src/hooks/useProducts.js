import { useEffect, useState } from "react";
import {
  addProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../helpers/productHelpers";
import { UI_TEXT } from "../constants/uiText";

const emptyProductForm = {
  title: "",
  category: "",
  stock: "",
  price: "",
};

export function useProducts() {
  const [tasks, setTasks] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [productForm, setProductForm] = useState(emptyProductForm);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productForm.title.trim()) {
      setError("Ürün adı boş bırakılamaz.");
      return;
    }

    if (!productForm.category.trim()) {
      setError("Kategori boş bırakılamaz.");
      return;
    }

    if (!productForm.stock) {
      setError("Stok miktarı boş bırakılamaz.");
      return;
    }

    if (!productForm.price) {
      setError("Fiyat boş bırakılamaz.");
      return;
    }

    if (editId !== null) {
      const updatedProducts = updateProduct(tasks, editId, productForm);
      setTasks(updatedProducts);
      setEditId(null);
      setProductForm(emptyProductForm);
      setError("");
      return;
    }

    const newProduct = createProduct(productForm);
    const updatedProducts = addProduct(tasks, newProduct);

    setTasks(updatedProducts);
    setProductForm(emptyProductForm);
    setError("");
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(UI_TEXT.DELETE_CONFIRM);

    if (!confirmDelete) return;

    const updatedProducts = deleteProduct(tasks, id);
    setTasks(updatedProducts);

    if (editId === id) {
      setEditId(null);
      setProductForm(emptyProductForm);
    }

    setError("");
  };

  const handleEdit = (task) => {
    setProductForm({
      title: task.title,
      category: task.category,
      stock: task.stock,
      price: task.price,
    });

    setEditId(task.id);
    setError("");
  };

  return {
    tasks,
    productForm,
    setProductForm,
    editId,
    error,
    handleSubmit,
    handleDelete,
    handleEdit,
  };
}