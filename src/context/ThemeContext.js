import React, { createContext, useEffect, useState } from 'react'

import { DARK, LIGHT } from '../utils/const'

const ThemeContext = createContext({ theme: 'dark' })

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DARK)

  const setLightTheme = () => setTheme(LIGHT)
  const setDarkTheme = () => setTheme(DARK)

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    htmlEl.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeContext