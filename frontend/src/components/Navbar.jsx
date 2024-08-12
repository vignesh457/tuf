import React from 'react'
import css from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={css.navbarCtn}>
        <span className={css.navbarLogo}>TUF+</span>
    </div>
  )
}

export default Navbar