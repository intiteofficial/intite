"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [_, __] = React.useState(false)
  React.useEffect(() => {
    __(true)
  }, [])
  if (!_) {
    return null
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
