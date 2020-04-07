import 'prismjs/themes/prism-okaidia.css';

import { Link, graphql, useStaticQuery } from "gatsby"

import Navigation from "../components/navigation"
import React from "react"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; OKC/Norman PPE Squad 2020 &bull; Organized and Built by Volunteers </p>
      </footer>
    </div>
  );
}