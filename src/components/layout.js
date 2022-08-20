import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={`Title`} />
      <main>{children}</main>
      <footer style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: 'auto',
        height: '5rem',
        fontSize: '.7rem',
        paddingBottom: '.5rem'
      }}>
        © {new Date().getFullYear()} &middot; 3Am Historias
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout