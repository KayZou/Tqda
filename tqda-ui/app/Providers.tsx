"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import darkTheme from "./dark.theme";
import React, { ReactElement } from "react";
import { ThemeProvider } from "@mui/material";
import { AuthContext } from "./auth/auth-context";

interface Props {
  children: ReactElement[];
  authenticated: boolean;
}

export default function Providers({ children, authenticated }: Props) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider value={authenticated}>
          {children}
        </AuthContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
