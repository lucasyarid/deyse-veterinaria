import React from 'react'

const Service = ({ data }) => (
  <div className="service section" id="services">
    <div className="container">
      <div className="section-head">
        <h2>Service</h2>
      </div>
      <div className="row">
        {data.edges.map((item, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="service-main">
              <h3>{item.node.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.node.description.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Service
