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
          <div class="top">
            <span>Designed &amp; Developed by</span>
          </div>
          <div class="bottom">
            <span>Brittany Chiang</span>
            <img class="emoji" src="/images/emojis/rockon.png" alt="emoji" />
            <span>2018</span>
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
