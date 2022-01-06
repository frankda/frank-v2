import { useContext } from 'react'

import { ThemeContext } from 'pages/_app'
import Moon from './MoonIcon/MoonIcon'
import { 
  Button,
  Container,
  Left,
  Link,
  Logo,
  NavigationLinks,
  NavigationWrapper,
  Right
} from './Navigation.styles'
import Sun from './SunIcon/SunIcon'

const Navigation = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
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
          <Button onClick={toggleTheme}>
            {isDarkTheme ? <Moon /> : <Sun />}
          </Button>
        </Right>
      </NavigationWrapper>
    </Container>
  )
}

export default Navigation