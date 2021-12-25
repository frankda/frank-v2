import { createGlobalStyle } from 'styled-components'

const globalStyles = `
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
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default createGlobalStyle`${globalStyles}`