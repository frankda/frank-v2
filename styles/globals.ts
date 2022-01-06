import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './themes'
import { AnimationClassNames } from './Animation'

type Props = {
  theme: ThemeType
}

const GlobalStyles = createGlobalStyle<Props>`
  ${AnimationClassNames}

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
    transition: background 0.2s ease;
  }

  body {
    font-family: Ubuntu;
    background-color: ${props => props.theme.color.backgroundColor };
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: ${p => p.theme.color.fontColor}
  }
`

export default GlobalStyles