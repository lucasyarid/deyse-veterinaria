import React, { useState } from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const PhotosPage = ({ data }) => {
  const [activePopup, setActivePopup] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)

  const select = (index) => {
    setActivePopup(true)
    setSelectedItem(index)
  }

  return (
    <Layout>
      <SEO
        title="Photos"
      />
      <div className="site-container blogs-page" id="Blogs">
        <div className="container">
          <div className="section-head">
            <h1 className="line-heading h2">Photos</h1>
          </div>
          <ul className="photos-page-list">
            {data.contentfulPhotos.photos.map((item, index) => (
              <li key={index} className="item">
                <div
                  className="inner"
                  onClick={() => { select(index) }}
                >
                  <Img
                    fixed={item.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                </div>
              </li>
            ))}
          </ul>
          {activePopup && (
            <div className="rg-popup">
              <span
                className="popup-layer"
                onClick={setActivePopup}
              ></span>

              <div className="popup-inner">
                <i
                  className="fas fa-times"
                  onClick={setActivePopup}
                ></i>
                <img
                  src={data.contentfulPhotos.photos[selectedItem].file.url}
                  alt="popup-img"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default PhotosPage

export const pageQuery = graphql`
  query PhotosPageQuery {
    contentfulPhotos {
      photos {
        file {
          url
        }
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`
