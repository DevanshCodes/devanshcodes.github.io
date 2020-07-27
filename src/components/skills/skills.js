import React, { Component } from "react"
import skills from "../../../static/content/skills"
import "./skills.scss"

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section class="section skills">
        <div class="section__title">Skills</div>
        <div class="section__content">
          <div class="skillz">
            <div class="skillz__category">
              <div class="skillz__category__label">Languages</div>
              <ul>
                {skills.languages.map(language => {
                  return <li class="skillz__category__item">{language}</li>
                })}
              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">Frameworks</div>
              <ul>
                {skills.frameworks.map(framework => {
                  return <li class="skillz__category__item">{framework}</li>
                })}
              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">Tools</div>
              <ul>
                {skills.tools.map(tool => {
                  return <li class="skillz__category__item">{tool}</li>
                })}
              </ul>
            </div>
            <div class="skillz__category">
              <div class="skillz__category__label">Design</div>
              <ul>
                {skills.design.map(thing => {
                  return <li class="skillz__category__item">{thing}</li>
                })}
              </ul>
            </div>
          </div>
          <div class="skillz__category__label other">Others</div>
          <div>
            <ul>
              {skills.others.map(thing => {
                return <li class="skillz__category__item">{thing}</li>
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills
