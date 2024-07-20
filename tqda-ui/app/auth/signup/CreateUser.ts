"use server";

import { post } from "@/app/utils/fetch";
import { redirect } from "next/navigation";
import { FormError } from "../common/form-error.interface";

export default async function CreateUser(_prevState: FormError, formData: FormData) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
