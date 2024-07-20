"use server";

import { post } from "@/app/utils/fetch";
import { redirect } from "next/navigation";

export default async function CreateUser(_prevState: any, formData: FormData) {
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}
