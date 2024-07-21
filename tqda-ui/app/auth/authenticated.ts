"use server";
import { cookies } from "next/headers";
import React from "react";
import { AUTHENTICATION } from "../constants/names";

export default async function authenticated() {
  return !!cookies().get(AUTHENTICATION)?.value;
}
