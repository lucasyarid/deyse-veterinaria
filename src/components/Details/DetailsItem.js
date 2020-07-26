import React from 'react'

export const DetailsItem = ({ title, description }) => (
  <li className="DetailsItem">
    <strong>{ title }</strong>
    <p>{description}</p>
  </li>
)
