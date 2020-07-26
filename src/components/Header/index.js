import React, { useState } from 'react'

import { Logo } from './Logo'
import { MenuItem } from './MenuItem'

export const Header = ({ data, header }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  console.log('aqui', data.menus)

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
              {data.menus.map((menu, key) =>
                <MenuItem
                  key={key}
                  page={menu}
                />
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
