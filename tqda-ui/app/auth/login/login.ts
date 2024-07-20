"use server";

import { API_URl } from "@/app/constants/api";
import { FormError } from "../common/form-error.interface";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

interface ErrorResponse {
  message: string | string[];
}

function isErrorResponse(res: any): res is ErrorResponse {
  return typeof res.message === "string" || Array.isArray(res.message);
}

export default async function Login(_prevState: FormError, formData: FormData) {
  const res = await fetch(`${API_URl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok || isErrorResponse(parsedRes)) {
    return { error: parsedRes.message };
  }
  setAuthCookie(res);
  redirect("/");
}

const setAuthCookie = (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    cookies().set({
      name: "Authentication",
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};
