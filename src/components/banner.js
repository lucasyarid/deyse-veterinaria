import React from 'react'
import Img from 'gatsby-image'

const Banner = ({ data }) => (
  <div className="banner">
    <Img
      fixed={data.bannerImage.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
    />
    <div className="container">
      <div className="banner-details">
        <h1>{data.name}</h1>
        <span>{data.designation}</span>
        <ul className="sub-data">
          {data.bannerList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <ul className="social">
          <li>
            <a
              className="fab fa-facebook-f"
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              className="fab fa-instagram"
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Banner
