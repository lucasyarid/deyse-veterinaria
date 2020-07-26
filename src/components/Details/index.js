import React from 'react'
import { DetailsItem } from './DetailsItem'

export const Details = ({ details }) => {
  const mappedDetailsItems = details.map(({ title, description }, index) => (
    <DetailsItem
      title={title}
      description={description}
      key={index}
    />
  ))

  return <ul className="Details">{ mappedDetailsItems }</ul>
}
