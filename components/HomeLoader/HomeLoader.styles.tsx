import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  svg {
    color: ${p => p.theme.color.fontColor};
    max-width: 800px;
  }
`

export const Line = styled.div<{
  height: number,
  top: number
}>`
  position: absolute;
  top: ${p => p.top}vh;
  left: 0;
  width: 0;
  height: calc(${p => p.height}vh + 1px);
  background: white;
`

export const Text = styled.p`
  margin-top: 24px;
  font-size: 48px;
  color: ${p => p.theme.color.fontColor};
`