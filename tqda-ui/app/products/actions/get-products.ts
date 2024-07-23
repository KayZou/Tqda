"use server";

import { get } from "@/app/utils/fetch";
import { Product } from "../interfaces/product.interface";

export default async function GetProducts() {
  return get<Product[]>("products");
}
