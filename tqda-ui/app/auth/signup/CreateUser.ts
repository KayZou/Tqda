"use server";

import { API_URl } from "@/app/constants/api";
import { getErrorMessage } from "@/app/utils/error";
import { redirect } from "next/navigation";

interface ErrorResponse {
  message: string | string[];
}

function isErrorResponse(res: any): res is ErrorResponse {
  return typeof res.message === "string" || Array.isArray(res.message);
}

export default async function CreateUser(_prevState: any, formData: FormData) {
  const res = await fetch(`${API_URl}/users`, {
    method: "POST",
    body: formData,
  });
  const parseRes = await res.json();
  if (!res.ok) {
    if (isErrorResponse(parseRes)) {
      return { error: parseRes.message };
    } else {
      console.error("Unexpected server response:", parseRes);
      return { error: "Error occurred, please try again!" };
    }
  }
  redirect("/");
}
