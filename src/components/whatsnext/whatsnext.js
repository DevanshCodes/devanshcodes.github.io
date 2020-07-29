import React, { Component } from "react"
import "./whatsnext.scss"
class Whatsnext extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section class="section1 background">
        <div class="section__title">What's Next</div>
        <div class="section__content">
          <p>
            I'm currently working on expanding my JS toolkit apart from my
            academic engagement, hence
            <span className="internoppur">
              {" "}
              Looking for an Intern Opportunity in Software Developer domain
            </span>{" "}
            that will help me with the same. If you do find my work interesting,
            do hit me up!
          </p>
          <div class="intro__contact">
            <span>Get in touch </span>
            <span class="emoji pointer"></span>
            <span>
              <a
                href="mailto:devanshagarwal50@gmail.com"
                target="_blank"
                class="highlight-link"
              >
                devanshagarwal50@gmail.com
              </a>
            </span>
          </div>
        </div>
      </section>
    )
  }
}

export default Whatsnext
