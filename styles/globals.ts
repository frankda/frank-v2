import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './themes'

type Props = {
  theme: ThemeType
}

const GlobalStyles = createGlobalStyle<Props>`
  @font-face {
    src: url('/fonts/Ubuntu-Regular.ttf') format('truetype');
    font-display: swap;
    font-family: 'Ubuntu';
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    src: url('/fonts/Ubuntu-Italic.ttf') format('truetype');
    font-display: swap;
    font-family: 'Ubuntu';
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    src: url('/fonts/Ubuntu-Medium.ttf') format('truetype');
    font-display: swap;
    font-family: 'Ubuntu';
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    src: url('/fonts/Ubuntu-Bold.ttf') format('truetype');
    font-display: swap;
    font-family: 'Ubuntu';
    font-weight: 700;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Ubuntu;
    max-width: 1200px;
    margin: auto;
    padding: 0 16px;
    background-color: ${props => props.theme.backgroundColor };
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles