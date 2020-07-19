import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SuccessPage = () => (
  <Layout>
    <SEO title="Obrigada" />
    <div className="site-container not-found-page">
      <div className="container text-center">
        <h1>Obrigada!</h1>
        <p>Entrarei em contato contigo em breve.</p>
      </div>
    </div>
  </Layout>
)

export default SuccessPage
