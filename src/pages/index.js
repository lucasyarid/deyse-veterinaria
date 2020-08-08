import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Banner from '../components/banner'
import About from '../components/about'
import Service from '../components/service'
import Blogs from '../components/blogs'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Photos from '../components/photos'

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO title={data.contentfulAboutMe.designation} />

    <Banner data={data.contentfulAboutMe} />

    <About
      data={data.contentfulAboutMe}
      details={data.allContentfulDetails.edges}
    />

    <Service data={data.allContentfulService} />

    <Blogs data={data.allContentfulBlogs} />

    <Testimonial data={data.allContentfulTestimonials} />

    <Photos data={data.contentfulPhotos} />

    <Contact data={data.contentfulAboutMe.gmail} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      gmail
      id
      instagram
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
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
      bannerList
    }
    allContentfulService {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulDetails {
      edges {
        node {
          id
          title
          description
        }
      }
    }
    allContentfulBlogs(limit: 5, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
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
          createdAt
        }
      }
    }
    allContentfulTestimonials {
      edges {
        node {
          name
          subTitle
          description {
            childMarkdownRemark {
              html
            }
          }
          avatarImage {
            fluid(maxWidth: 200) {
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
    }
    contentfulPhotos {
      photos {
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
    contentfulSiteInformation {
      menus
    }
  }
`
