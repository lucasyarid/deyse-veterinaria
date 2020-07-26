import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, keywords, title, data }) => (
  <StaticQuery
    query={detailsQuery}
    render={data => (
      <Helmet
        htmlAttributes={{
          lang
        }}
        title={title}
        titleTemplate={`%s | ${data.contentfulSiteInformation.siteName}`}
        meta={[
          {
            name: 'description',
            content: data.contentfulSiteInformation.siteDescription
          },
          {
            property: 'og:title',
            content: title
          },
          {
            property: 'og:description',
            content: data.contentfulSiteInformation.siteDescription
          },
          {
            property: 'og:type',
            content: 'website'
          }
        ]
          .concat(
            keywords.length > 0
              ? {
                name: 'keywords',
                content: keywords.join(', ')
              }
              : []
          )
          .concat(meta)}
      />
    )}
  />
)

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    contentfulSiteInformation {
      siteName
      siteDescription
    }
  }
`
