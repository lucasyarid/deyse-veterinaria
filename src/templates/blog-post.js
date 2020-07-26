import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'

const blogPost = ({ data }) => {
  const blogData = data.contentfulBlogs

  return (
    <Layout>
      <SEO
        title={blogData.title}
      />
      <div className="site-container blog-post">
        <div className="container">
          {blogData.featureImage ? (
            <Img
              className="feature-img"
              fixed={blogData.featureImage.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
            />
          ) : (
            <div className="no-image"></div>
          )}

          <div className="details">
            <h1 className="title">{blogData.title}</h1>
            <span className="date">
              <i className="fas fa-calendar-alt"></i>{' '}
              {moment(blogData.createdAt).format('LL')}
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: blogData.description.childMarkdownRemark.html
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default blogPost

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      slug
      featureImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      createdAt
    }
    contentfulSiteInformation {
      siteUrl
    }
  }
`
