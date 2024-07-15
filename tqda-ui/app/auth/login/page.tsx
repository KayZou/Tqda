import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" type="email" />
      <TextField label="Password" variant="outlined" type="password" />
      <Button variant="contained">Login</Button>
      <Link component={NextLink} className="self-center" href="/auth/signup">
        Signup
      </Link>
    </Stack>
  );
}
