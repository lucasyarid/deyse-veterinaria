import React from 'react'
import Img from 'gatsby-image'

import { Details } from './Details'

const About = ({ data, details }) => {
  const mappedDetails = details.map(detail => detail.node)

  return (
    <div className="about section" id="About">
      <div className="container">
        <div className="about-main row">
          <div className="left col-md-5 col-lg-4 mb-3">
            <Img
              fixed={data.photo.fluid}
              objectFit="cover"
              objectPosition="top center"
            />
          </div>
          <div className="left col-md-7 col-lg-8">
            <div className="about-details">
              <span className="name">My Name is {data.name}.</span>
              <h2 className="sub-position">
              Sou uma {data.designation}.
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html
                }}
              />
              <Details details={mappedDetails}/>
              <div className="socials">
                <ul>
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
        </div>
      </div>
    </div>
  )
}

export default About
