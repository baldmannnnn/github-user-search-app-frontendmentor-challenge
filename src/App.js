import { ThemeProvider } from 'styled-components'
import MainContainer from './containers/main'
import UserDetailsContainer from './containers/userDetails'
import HeaderContainer from './containers/header'
import { GlobalStyles } from './globalStyles'
import { useThemeContext } from './context/themeContext'

const App = () => {
  const { theme, lightTheme, darkTheme } = useThemeContext()
  console.log(theme)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderContainer />
      <MainContainer />
      <UserDetailsContainer />
    </ThemeProvider>
  )
}

export default App
