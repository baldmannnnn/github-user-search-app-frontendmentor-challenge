import { Header } from '../components'
import IconSun from '../assets/images/icon-sun.svg'
import IconMoon from '../assets/images/icon-moon.svg'
import { useThemeContext } from '../context/themeContext'
import { Container } from '../globalStyles'

const HeaderContainer = () => {
  const { theme, setTheme } = useThemeContext()

  const ToggleThemeSwitch = () => {
    

    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    // <Container>
    <Header>
      <Header.Wrapper>
        <Header.Logo>devfinder</Header.Logo>
      </Header.Wrapper>
      <Header.Wrapper>
        <Header.Btn onClick={ToggleThemeSwitch}>
          <Header.Text>{theme === 'light' ? 'dark' : 'light'}</Header.Text>
          <Header.Icon
            src={theme === 'light' ? IconMoon : IconSun}
            alt={theme}
          />
        </Header.Btn>
      </Header.Wrapper>
    </Header>
    // </Container>
  )
}

export default HeaderContainer
