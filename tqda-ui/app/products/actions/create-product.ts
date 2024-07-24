"use server";

import { revalidateTag } from "next/cache";
import { getHeaders, post } from "../../utils/fetch";
import { API_URl } from "@/app/constants/api";

export default async function CreateProduct(formData: FormData) {
  const result = await post("products", formData);
  const productImage = formData.get("image");
  if (productImage instanceof File && !result.error) {
    await uploadProductImage(result.data.id, productImage);
  }
  revalidateTag("products");
  return result;
}

async function uploadProductImage(productId: number, file: File) {
  const formData = new FormData();
  formData.append("image", file);
  await fetch(`${API_URl}/products/${productId}/image`, {
    body: formData,
    method: "POST",
    headers: getHeaders(),
  });
}
