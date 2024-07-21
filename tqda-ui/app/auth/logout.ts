"use server";
import { cookies } from "next/headers";
import React from "react";
import { AUTHENTICATION } from "../constants/names";
import { redirect } from "next/navigation";

export default async function logout() {
  cookies().delete(AUTHENTICATION);
  redirect("/auth/login");
}
