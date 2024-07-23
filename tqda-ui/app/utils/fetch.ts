import { cookies } from "next/headers";
import { API_URl } from "../constants/api";

interface ErrorResponse {
  message: string | string[];
}

function isErrorResponse(res: any): res is ErrorResponse {
  return typeof res.message === "string" || Array.isArray(res.message);
}

const getHeaders = () => ({
  Cookie: cookies().toString(),
});

export const post = async (path: string, formData: FormData) => {
  const res = await fetch(`${API_URl}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getHeaders() },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok || isErrorResponse(parsedRes)) {
    return { error: parsedRes.message };
  }
  return { error: "" };
};

export const get = async <T>(path: string, tags?: string[]) => {
  const res = await fetch(`${API_URl}/${path}`, {
    headers: { ...getHeaders() },
    next: {
      tags,
    },
  });
  return res.json() as T;
};
