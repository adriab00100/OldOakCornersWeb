import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/logo.svg';
import "./site-header.scss"

const Header = ({ siteTitle }) => (
  <header className="site-header full-width-container" >
    <div className="full-width-container limited-width-container site-header-logo-and-title">
      <Link
        to="/"
      >
        <div className="logo-container">
          <Logo />
        </div>
      </Link>
      <h1 className='site-header-title'>
        {siteTitle}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
