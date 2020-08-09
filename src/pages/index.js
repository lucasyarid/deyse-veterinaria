import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Banner from '../components/banner'
import About from '../components/about'
import Service from '../components/service'
import Blogs from '../components/blogs'
import Contact from '../components/contact'

const IndexPage = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const components = {
    about: {
      Component: About,
      props: {
        data: data.contentfulAboutMe,
        details: data.allContentfulDetails.edges
      }
    },
    services: {
      Component: Service,
      props: {
        data: data.allContentfulService
      }
    },
    blog: {
      Component: Blogs,
      props: {
        data: data.allContentfulBlogs
      }
    },
    contact: {
      Component: Contact,
      props: {
        data: data.contentfulAboutMe.gmail
      }
    }
  }

  const sections = () => data.contentfulSiteInformation.sections
    .map(({ name }) => {
      const sectionComponent = components[name]
      if (!sectionComponent) return
      const { Component, props } = sectionComponent

      return <Component key={name} {...props} />
    })

  return (
    <Layout header="home">
      <SEO title={data.contentfulAboutMe.designation} />

      <Banner data={data.contentfulAboutMe} />

      { sections() }
    </Layout>
  )
}

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
      sections {
        label
        name
      }
    }
  }
`
