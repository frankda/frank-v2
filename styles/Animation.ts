import { css, keyframes } from 'styled-components'

const fadeDownAnime = keyframes`
  from {
    opacity: 0.01;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const AnimationClassNames = css`
  .fade-down {
    animation: 300ms ${fadeDownAnime} ease-out;
  }
`

export { AnimationClassNames }