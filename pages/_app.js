import { createContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import useTheme from 'hooks/useTheme'
import { DARK_THEME, LIGHT_THEME } from 'styles/themes'

export const ThemeContext = createContext()

function MyApp({ Component, pageProps }) {
  const { isDarkTheme, toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <StyledComponentsThemeProvider theme={isDarkTheme ? DARK_THEME : LIGHT_THEME}>
        <Component {...pageProps} />
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MyApp
