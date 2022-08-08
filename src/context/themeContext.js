import { createContext, useEffect, useContext } from 'react'
import useLocalStorage from 'use-local-storage'

const ThemeContext = createContext()

const lightTheme = {
  themeColor: 'light',
  primaryColor: 'var(--clr-primary)',
  secondaryColor: 'var(--clr-secondary)',
  backgroundColor1: 'var(--clr-neutral-500)',
  backgroundColor2: 'var(--clr-neutral-300)',
  accentColor1: 'var(--clr-accent-100)',
  accentColor2: 'var(--clr-accent-300)',
}

const darkTheme = {
  themeColor: 'dark',
  primaryColor: 'var(--clr-primary)',
  secondaryColor: 'var(--clr-neutral-100)',
  backgroundColor1: 'var(--clr-accent-500)',
  backgroundColor2: 'var(--clr-accent-700)',
  accentColor1: 'var(--clr-neutral-300)',
  accentColor2: 'var(--clr-accent-700)',
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage(
    'theme',
    prefersDark ? 'dark' : 'light'
  )

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

export { ThemeContextProvider, useThemeContext }
