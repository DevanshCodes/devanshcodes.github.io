import React from "react"
import { graphql } from "gatsby"
import "./blog.scss"
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="section">
      <div className="blog-post-container">
        <div class="section__title">
          <h1>{frontmatter.title}</h1>
        </div>
        <div className="blog-post">
          <div className="date">{frontmatter.date}</div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
