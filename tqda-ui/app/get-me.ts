"use server";

import { cookies } from "next/headers";
import { API_URl } from "./constants/api";
import { get } from "./utils/fetch";

export default async function getMe() {
  return get("users/me")
}
