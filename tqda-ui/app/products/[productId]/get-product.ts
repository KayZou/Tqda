import { get } from "@/app/utils/fetch";
import { Product } from "../interfaces/product.interface";

export default async function GetProduct(productId: number) {
  return get<Product>(`products/${productId}`);
}
