import React, { Component } from "react"
import "./switch.scss"

class Switch extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="switch">
        <div class="switch-wrapper">
          <div class="sun"></div>
          <div class="toggle-wrapper">
            <input id="switch" type="checkbox" />
            <label for="switch" id="toggle">
              Toggle
            </label>
          </div>
          <div class="moon"></div>
        </div>
      </div>
    )
  }
}

export default Switch
