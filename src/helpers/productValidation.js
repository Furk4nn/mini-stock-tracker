import { MESSAGES } from "../constants/messages";

export function validateProductTitle(title, products, editId = null) {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    return MESSAGES.EMPTY_TASK;
  }

  if (trimmedTitle.length < 3) {
    return MESSAGES.SHORT_TASK;
  }

  if (trimmedTitle.length > 50) {
    return MESSAGES.LONG_TASK;
  }

  const isDuplicate = products.some(
    (product) =>
      product.title.toLowerCase() ===
        trimmedTitle.toLowerCase() &&
      product.id !== editId
  );

  if (isDuplicate) {
    return MESSAGES.DUPLICATE_TASK;
  }

  return "";
}