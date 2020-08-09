import React from 'react'
import { Link } from 'gatsby'

export const MenuItem = ({ page }) => (
  <li className="MenuItem">
    <Link to={`#${page.name.toLowerCase()}`}>{ page.label }</Link>
  </li>
)
