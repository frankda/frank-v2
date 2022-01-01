import styled from 'styled-components'

export const Container = styled.header`
  padding: 48px 16px 0 16px;
  height: 400px;
  color: ${p => p.theme.color.fontColor};
  background: linear-gradient(0, ${p => p.theme.color.homepageDark}, ${p => p.theme.color.homepageLight});
`

export const NavigationWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 12px;
  max-width: 1200px;
  margin: auto;
`

export const Left = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Link = styled.a``

export const Logo = styled.div`
  margin-right: 32px;
`

export const NavigationLinks = styled.nav`
  display: flex;
`

export const Right = styled.div``