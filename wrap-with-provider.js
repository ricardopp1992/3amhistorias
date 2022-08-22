import React from 'react'

import { ThemeProvider } from './src/context/ThemeContext'

const WrapWithProvider = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
)

export default WrapWithProvider