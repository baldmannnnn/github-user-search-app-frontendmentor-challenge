import { Header } from '../components'
import { useThemeContext } from '../context/themeContext'
import SvgIcon from '../components/icon/svg'

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
        <Header.Btn onClick={ToggleThemeSwitch}>
          <Header.Text>{theme === 'light' ? 'dark' : 'light'}</Header.Text>
          <SvgIcon
            name={theme === 'light' ? 'moon' : 'sun'}
            fill={
              theme === 'light'
                ? 'var(--clr-secondary)'
                : 'var(--clr-neutral-100)'
            }
          />
        </Header.Btn>
      </Header.Wrapper>
    </Header>
  )
}

export default HeaderContainer
