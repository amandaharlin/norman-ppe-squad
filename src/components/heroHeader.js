import { Link, StaticQuery, graphql } from "gatsby"

import React from "react"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        <Link to='/contact' className="button -primary">Contact Volunteers &rarr;</Link>
      </div>
    )}
  />
)