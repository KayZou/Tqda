"use server";

import { post } from "../../utils/fetch";

export default async function CreateProduct(formData: FormData) {
  return post("products", formData);
}
