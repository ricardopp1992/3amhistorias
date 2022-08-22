import React from 'react'

import { ThemeProvider } from './src/context/ThemeContext'

const WrapWithProvider = ({ element }) => (
  <React.StrictMode>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </React.StrictMode>
)

export default WrapWithProvider