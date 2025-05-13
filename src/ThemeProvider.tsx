"use client";
import * as React from "react";
import { ThemeProvider as Theme } from "next-themes";

type Props = {
  children?: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <Theme attribute='class' defaultTheme='light' enableSystem>
      {children}
    </Theme>
  );
}
