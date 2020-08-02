import React, { Component } from "react"
import experiences from "../../../static/content/experience"
import resume from '../resume/Resume.pdf'
import "./experience.scss"

class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section class="section experience">
        <div class="section__title">Experience</div>
        <div class="section__content">
          <div class="jobs">
            {experiences.map(experience => {
              return (
                <div class="job">
                  <div class="time-place">
                    <div class="job__company">
                      <a href={experience.url} target="_blank">
                        {experience.company}
                      </a>
                    </div>
                    <div class="job__time">{experience.time}</div>
                  </div>
                  <div class="job__position">{experience.position}</div>
                  <div className="jobDescription">{experience.description}</div>
                </div>
              )
            })}
          </div>
          <a href={resume} target="_blank" class="arrow-link">
            View My Resume
          </a>
        </div>
      </section>
    )
  }
}

export default Experience
