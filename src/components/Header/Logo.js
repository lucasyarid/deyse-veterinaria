import React from 'react'
import { Link } from 'gatsby'

export const Logo = ({ siteName, url }) => (
  <div className="logo">
    <Link to="/">
      {url
        ? <img src={url} alt={`Logo ${siteName}`} />
        : <span>{siteName}</span>
      }
    </Link>
  </div>
)
