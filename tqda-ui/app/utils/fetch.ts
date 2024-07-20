import { API_URl } from "../constants/api";

interface ErrorResponse {
    message: string | string[];
  }
  
  function isErrorResponse(res: any): res is ErrorResponse {
    return typeof res.message === "string" || Array.isArray(res.message);
  }

export const post = async (path: string, formData: FormData) => {
  const res = await fetch(`${API_URl}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok || isErrorResponse(parsedRes)) {
    return { error: parsedRes.message };
  }
  return { error: "" };
};
