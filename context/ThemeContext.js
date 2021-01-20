import { createContext } from 'react'
import themeVariables from '../theme'

const ThemeContext = createContext({
  ...themeVariables,
})

export default ThemeContext
