"use client";
import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import CreateUser from "./CreateUser";

export default function SignupPage() {
  const [state, formAction] = useFormState(CreateUser, { error: "" });
  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          helperText={state.error}
          error={!!state.error}
        />
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          helperText={state.error}
          error={!!state.error}
        />
        <Button variant="contained" type="submit">
          Signup
        </Button>
        <Link component={NextLink} className="self-center" href="/auth/login">
          Login
        </Link>
      </Stack>
    </form>
  );
}
