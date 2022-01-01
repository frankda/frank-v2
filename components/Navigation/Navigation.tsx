import { useContext } from 'react'

import { ThemeContext } from 'pages/_app'
import { 
  Container,
  Left,
  Link,
  Logo,
  NavigationLinks,
  NavigationWrapper,
  Right
} from './Navigation.styles'

const Navigation = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <Container>
      <NavigationWrapper>
        <Left className='fade-down'>
          <Logo>Frank</Logo>
          <NavigationLinks>
            <Link href='#'>Blogs</Link>
          </NavigationLinks>
        </Left>
        <Right>
          <button onClick={toggleTheme}>Theme</button>
        </Right>
      </NavigationWrapper>
    </Container>
  )
}

export default Navigation