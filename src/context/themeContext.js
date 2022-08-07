import {
  useState,
  createContext,
  useLayoutEffect,
  useEffect,
  useContext,
} from 'react'

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

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState()

  useEffect(() => {
    document.documentElement.classList.remove('theme-light')
    document.documentElement.classList.remove('theme-dark')

    try {
      const localTheme = localStorage.getItem('localTheme')
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      if (!localTheme && prefersDarkMode) {
        document.documentElement.classList.add('theme-dark')
        setTheme('dark')
        return
      }

      if (!localTheme && !prefersDarkMode) {
        document.documentElement.classList.add('theme-light')
        setTheme('light')
        return
      }

      if (localTheme) {
        document.documentElement.classList.add('theme-' + localTheme)
        setTheme(localTheme)
        return
      }
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('localTheme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, lightTheme, darkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

export { ThemeContextProvider, useThemeContext }
