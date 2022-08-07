import { ThemeProvider } from 'styled-components'
import MainContainer from './containers/main'
import UserDetailsContainer from './containers/userDetails'
import HeaderContainer from './containers/header'
import { Container, GlobalStyles } from './globalStyles'
import { useThemeContext } from './context/themeContext'
import { useUserContext } from './context/userContext'

const App = () => {
  const { theme, lightTheme, darkTheme } = useThemeContext()
  const { isLoading } = useUserContext()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {!isLoading && (
        <Container>
          <HeaderContainer />
          <MainContainer />
          <UserDetailsContainer />
        </Container>
      )}
    </ThemeProvider>
  )
}

export default App
