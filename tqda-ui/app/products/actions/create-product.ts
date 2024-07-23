"use server";

import { revalidateTag } from "next/cache";
import { post } from "../../utils/fetch";

export default async function CreateProduct(formData: FormData) {
  const result = await post("products", formData);
  revalidateTag("products");
  return result;
}
