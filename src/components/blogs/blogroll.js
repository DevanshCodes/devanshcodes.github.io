import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import './blogroll.scss'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section class="section blogs">
        <div class="section__title">BLOGS</div>
        <div class="section__content">
            <div class="jobs">
              {posts &&
                posts.map(({ node: post }) => (
                  <div key={post.id}>
                    <article
                      className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? "is-featured" : ""
                      }`}
                    >
                      <div className="job">
                        <div className="time-place">
                          <div className="job__company">
                            <Link
                              to={post.frontmatter.path}
                            >
                              {post.frontmatter.title}
                            </Link>
                          </div>
                          <div className="job__time">{post.frontmatter.date}</div>
                        </div>
                        <div className="jobDescription">{post.excerpt}</div>
                        <div className="readingLink">
                          <Link className="button" to={post.frontmatter.path}>
                            Keep Reading →
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
            </div>
          </div>
      </section>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
