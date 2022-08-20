import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header
    style={{
      margin: `0 auto`,
      display: `flex`,
      paddingTop: '2rem',
      alignItems: `center`,
      justifyContent: `space-between`,
      height: '5rem',
    }}
  >
    <Link to="/">
      <StaticImage style={{ width: '5rem' }} src="../images/3am_logo.png" />
    </Link>
  </header>
)

export default Header
