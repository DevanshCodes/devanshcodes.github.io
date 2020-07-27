import React, { Component } from "react"
import "./intro.scss"

class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="introHead">
        <div className="intro">
          <h1 class="intro__hello">
            Hello!
            <div className="emojiRandom">
              <span class="emoji wave-hand animated"></span>
            </div>
          </h1>

          <h2 class="intro__tagline">
            I'm
            <span class="name"> Devansh Agarwal</span>, a design-minded
            full-stack web developer, focused on designing and developing
            beautiful interfaces.
          </h2>
          <h3 class="intro__contact">
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
          </h3>
        </div>
        <div>
          <img src="/images/hello.svg" alt="hello" className="hello" />
        </div>
      </div>
    )
  }
}

export default Intro
