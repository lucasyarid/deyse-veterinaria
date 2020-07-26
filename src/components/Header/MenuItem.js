import React from 'react'
import { Link } from 'gatsby'

export const MenuItem = ({ page }) => (
  <li className="MenuItem">
    <Link to={`/${page.toLowerCase()}`}>{ page }</Link>
  </li>
)
