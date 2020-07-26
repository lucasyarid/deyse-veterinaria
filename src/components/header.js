import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = ({ data, header }) => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => setMenu(!menu)
  const closeMenu = () => setMenu(false)

  return (
    <header className={`site-header ${menu ? 'active' : ''}`}>
      <div className="container">
        <div className="header-main">
          <div className="logo">
            <Link to="/">
              {data.logo.file.url ? (
                <img src={data.logo.file.url} alt="logo" />
              ) : (
                <span>{data.siteName}</span>
              )}
            </Link>
          </div>
          <div
            className="responsive-menu"
            onClick={toggleMenu}
          >
            <span></span>
          </div>
          {header === 'home' ? (
            <div className="menu">
              <ul onClick={closeMenu}>
                <li>
                  <Link to="/#home">Home</Link>
                </li>
                {data.menus
                  .filter((item) => item === 'About')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to={'/#About'}>About</Link>
                    </li>
                  ))}
                {data.menus
                  .filter((item) => item === 'Service')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to={'/#Service'}>Service</Link>
                    </li>
                  ))}
                {data.menus
                  .filter((item) => item === 'Blogs')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to={'/#Blogs'}>Blogs</Link>
                    </li>
                  ))}

                {data.menus
                  .filter((item) => item === 'Work')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to={'/#Work'}>Work</Link>
                    </li>
                  ))}
                {data.menus
                  .filter((item) => item === 'Testimonials')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to={'/#Testimonials'}>Testimonials</Link>
                    </li>
                  ))}
                {data.menus
                  .filter((item) => item === 'Photos')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to={'/#Photos'}>Photos</Link>
                    </li>
                  ))}
                {data.menus
                  .filter((item) => item === 'Contact')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to={'/#Contact'}>Contact</Link>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <div className="menu">
              <ul
                onClick={closeMenu}
              >
                <li>
                  <Link to="/#home">Home</Link>
                </li>
                {data.menus
                  .filter((item) => item === 'Blogs')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                  ))}
                {data.menus
                  .filter((item) => item === 'Photos')
                  .map((t, key) => (
                    <li key={key}>
                      <Link to="/photos">Photos</Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
