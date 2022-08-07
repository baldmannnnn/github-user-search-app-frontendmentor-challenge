import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'
import { UserContextProvider } from './context/userContext'
import { ThemeContextProvider } from './context/themeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)
