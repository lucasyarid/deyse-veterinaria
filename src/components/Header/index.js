import React, { useState } from 'react'

import { Logo } from './Logo'
import { MenuItem } from './MenuItem'

export const Header = ({ data, header }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isMenuOpen ? 'active' : ''}`}>
      <div className="container">
        <div className="header-main">
          <Logo
            siteName={data.siteName}
            url={data.logo.file.url}
          />

          <div
            className="responsive-menu"
            onClick={toggleMenu}
          >
            <span></span>
          </div>

          <div className="menu">
            <ul onClick={closeMenu}>
              {data.sections.map((section, key) =>
                <MenuItem
                  key={key}
                  page={section}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
