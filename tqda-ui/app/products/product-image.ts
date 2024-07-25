import { API_URl } from "../constants/api";

export const getProductImage = (productId: number) => {
  return `${API_URl}/images/products/${productId}.avif`;
};
