import React, { Component } from "react"
import otherProjects from "../../../static/content/other-projects"
import "./other-projects.scss"

class OtherProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section class="section other-projects">
        <div class="section__title">Other Projects</div>
        <div class="section__content">
          {otherProjects.map(project => {
            return (
              <div class="project">
                <div class="project__name">
                  <a href={project.url} target="_blank" class="arrow-link">
                    {project.name}
                  </a>
                  {/* <div class={project.type}></div> */}
                </div>
                <p>{project.description}</p>
                <div class="project__used">
                  {project.used.map(item => {
                    return <span class="project__used__item">{item}</span>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default OtherProjects
