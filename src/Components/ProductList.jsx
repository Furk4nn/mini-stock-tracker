import ProductCard from "./ProductCard";
import { UI_TEXT } from "../constants/uiText";

function ProductList({ tasks, handleDelete, handleEdit }) {
  if (tasks.length === 0) {
    return <p className="empty-state">{UI_TEXT.EMPTY_STATE}</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <ProductCard
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
}

export default ProductList;