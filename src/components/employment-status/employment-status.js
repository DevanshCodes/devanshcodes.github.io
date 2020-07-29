import React, { Component } from "react"
import "./employment-status.scss"

class EmploymentStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <a class="status" href="/resume.pdf" target="_blank">
        <div class="status__light">
          <div class="status__light__ring"></div>
          <div class="status__light__led"></div>
        </div>
        <div class="status__message">Looking for Summer 2021 Internship</div>
      </a>
    )
  }
}

export default EmploymentStatus
