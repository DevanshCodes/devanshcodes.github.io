import React, { Component } from "react"
import EmploymentStatus from "../employment-status/employment-status"
import "./section-background.scss"

class SectionBackground extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section class="section background">
        <div class="section__title">Background</div>
        <div class="section__content">
          <p>
            I'm a MSc. Chemistry &amp; B.E. Electrical and Electronics Engineer
            Undegraduate at
            <a
              class="underline-link"
              href="https://www.bits-pilani.ac.in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Birla Institute of Technology and Science, Pilani
            </a>
            , graduating in 2023.
          </p>

          <p>
            I have a general interest in designing and developing beautiful
            interfaces and experiences apart from my academic engagement. I
            enjoy reducing the barrier between design and development by
            combining my keen eye for design and my technical knowledge of
            development stack.
          </p>

          <p>
            <strong>When I'm not working</strong>, I'll probably be engaged in
            solving problems on leetcode or interviewbit or could just be playing computer games.
          </p>
          <EmploymentStatus />
        </div>
      </section>
    )
  }
}

export default SectionBackground
