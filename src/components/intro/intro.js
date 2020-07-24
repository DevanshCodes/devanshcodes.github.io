import React, { Component } from "react"
import "./intro.scss"

class Intro extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <header class="intro">
        <h1 class="intro__hello">
          Hello!
          <span class="emoji wave-hand animated"></span>
        </h1>

        <h2 class="intro__tagline">
          I'm
          <span class="name"> Devansh Agarwal</span>, a design-minded full-stack
          web developer, focused on building beautiful interfaces &amp;
          experiences
          <span class="emoji technologist"></span>
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
      </header>
    )
  }
}

export default Intro
