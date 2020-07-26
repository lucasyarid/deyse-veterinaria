import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = ({ data }) => (
  <Layout>
    <SEO
      title="Blogs"
    />
    <div className="site-container blogs-page" id="Blogs">
      <div className="container">
        <div className="section-head">
          <h1 className="line-heading h2">Blogs</h1>
        </div>
        <ul
          className={`blogs-list ${
                data.allContentfulBlogs.edges.length < 5 ? 'few-blogs' : ''
              }`}
        >
          {data.allContentfulBlogs.edges.map((item, index) => (
            <li key={index} className="item">
              <div className="inner">
                <Link className="link" to={item.node.slug} />
                {item.node.featureImage ? (
                  <Img
                    fixed={item.node.featureImage.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                  />
                ) : (
                  <div className="no-image"></div>
                )}
                <div className="details">
                  <h3 className="title">{item.node.title}</h3>
                  <span className="date">
                    <i className="fas fa-calendar-alt"></i>{' '}
                    {moment(item.node.createdAt).format('LL')}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default Blog

export const pageQuery = graphql`
  query BlogsQuery {
    allContentfulBlogs(sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
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
          createdAt
        }
      }
    }
  }
`
