import { Header } from '../components'
import IconSun from '../assets/images/icon-sun.svg'
import IconMoon from '../assets/images/icon-moon.svg'
import { useThemeContext } from '../context/themeContext'

const HeaderContainer = () => {
  const { theme, setTheme } = useThemeContext()

  const ToggleThemeSwitch = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <Header>
      <Header.Wrapper>
        <Header.Logo>devfinder</Header.Logo>
      </Header.Wrapper>
      <Header.Wrapper>
        <div
          style={{
            hover: {
              backgroundColor: 'red',
            },
          }}>
          <Header.Btn onClick={ToggleThemeSwitch}>
            <Header.Text>{theme === 'light' ? 'dark' : 'light'}</Header.Text>

            <Header.Icon
              src={theme === 'light' ? IconMoon : IconSun}
              alt={theme}
            />
          </Header.Btn>
        </div>
      </Header.Wrapper>
    </Header>
  )
}

export default HeaderContainer
