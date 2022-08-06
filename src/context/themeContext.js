import { useState, createContext, useEffect, useContext } from 'react'

const ThemeContext = createContext()

const lightTheme = {
  themeColor: 'light',
  primaryColor: 'var(--clr-primary)',
  secondaryColor: 'var(--clr-secondary)',
  accentColor100: 'var(--clr-accent-100)',
  accentColor200: 'var(--clr-accent-100)',
}

const darkTheme = {
  themeColor: 'dark',
}

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

export { ThemeContextProvider, useThemeContext }
