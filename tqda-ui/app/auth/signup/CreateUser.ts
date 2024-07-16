"use server";

import { API_URl } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function CreateUser(_prevState: any, formData: FormData) {
  const res = await fetch(`${API_URl}/users`, {
    method: "POST",
    body: formData,
  });
  const parseRes = await res.json()
  if(!res.ok){
    console.log(parseRes)
    return {error: ""}
  }
  redirect("/")
}
