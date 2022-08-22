import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import ThemeContext from 'context/ThemeContext'
import { DARK } from 'utils/const'
import DarkModeIcon from '../../images/svg/dark_mode.svg'
import LightModeIcon from '../../images/svg/light_mode.svg'
import * as styles from './Header.module.scss'

const Header = () => {
  const { theme, setLightTheme, setDarkTheme } = useContext(ThemeContext)

  const handleThemeSwitch = () => {
    if (theme === DARK) {
      setLightTheme()
    } else {
      setDarkTheme()
    }
  }
  
  return (
    <header className={styles.header}>
      <Link to="/">
        {
          theme === DARK
          ? <StaticImage style={{ width: '5rem' }} src="../../images/3am_logo.png" />
          : <StaticImage style={{ width: '5rem' }} src="../../images/3am_logo_light.png" />
        }
      </Link>
      <button className={styles.themeButton} onClick={handleThemeSwitch}>
        {
          theme === DARK
          ? <LightModeIcon />
          : <DarkModeIcon />
        }
      </button>
    </header>
  )
}

export default Header