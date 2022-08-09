import { ThemeProvider } from 'styled-components'
import MainContainer from './containers/main'
import UserDetailsContainer from './containers/userDetails'
import HeaderContainer from './containers/header'
import FooterContainer from './containers/footer'
import { GlobalStyles } from './globalStyles'
import { useThemeContext } from './context/themeContext'
import { useUserContext } from './context/userContext'

const App = () => {
  const { theme, lightTheme, darkTheme } = useThemeContext()
  const { isLoading } = useUserContext()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {!isLoading && (
        <>
          <HeaderContainer />
          <MainContainer />
          <UserDetailsContainer />
          <FooterContainer />
        </>
      )}
    </ThemeProvider>
  )
}

export default App
