import React, { Component } from "react"
import social from "../../../static/content/social"
import "./footer.scss"

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <footer class="footer">
        <div class="footer__copyright">
          <div class="top">{/* <span> &amp;</span> */}</div>
          <div class="bottom">
            <a
              href="https://github.com/DevanshCodes/devanshcodes.github.io"
              target="_blank"
            >
              <img class="emoji" src="/images/github.svg" alt="emoji" />
              <span className="fork">Fork it on GitHub</span>
            </a>
          </div>
        </div>
        <div class="footer__links">
          {social.map(social => {
            return (
              <a href={social.url} target="_blank" title={social.title}>
                <span class="text">{social.title}</span>
                <img
                  src={`/images/social/${social.title}.svg`}
                  alt={social.title}
                />
              </a>
            )
          })}
        </div>
      </footer>
    )
  }
}

export default Footer
