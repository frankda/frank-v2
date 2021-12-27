import { createContext } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/globals'
import useTheme from 'hooks/useTheme'
import { DARK_THEME, LIGHT_THEME } from 'styles/themes'

export const ThemeContext = createContext()

function MyApp({ Component, pageProps }) {
  const { isDarkTheme, toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <StyledComponentsThemeProvider theme={isDarkTheme ? DARK_THEME : LIGHT_THEME}>
        <GlobalStyles />
        <Component {...pageProps} />
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MyApp
