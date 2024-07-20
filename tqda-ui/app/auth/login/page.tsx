"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import Login from "./login";

export default function LoginPage() {
  const [state, formAction] = useFormState(Login, { error: "" });
  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          error={!!state.error}
          helperText={state.error}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          error={!!state.error}
          helperText={state.error}
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Link component={NextLink} className="self-center" href="/auth/signup">
          Signup
        </Link>
      </Stack>
    </form>
  );
}
