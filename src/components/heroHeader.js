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
    render={(data) => (
      <div
        className="hero-header post-thumbnail"
        style={{
          backgroundImage: `url('/assets/untitled-design-7-.png')`,
        }}
      >
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        <span>
          <a
            href="https://www.gofundme.com/f/ppe-for-norman-amp-okc"
            className="button -primary"
          >
            Donate to our GoFundMe &rarr;
          </a>
        </span>
      </div>
    )}
  />
);