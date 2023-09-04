import React, { Component } from "react"
import "./mainpage.scss"
import Switch from "./switch/switch"
import Intro from "./intro/intro"
import SectionBackground from "./section-background/section-background"
import Skills from "./skills/skills"
import Experience from "./experience/experience"
import FeaturedProjects from "./featured-projects/featured-projects"
import OtherProjects from "./other-projects/other-projects"
import Footer from "./footer/footer"
import Whatsnext from "./whatsnext/whatsnext"
import BlogRoll from './blogs/blogroll'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      const myExtScript = require("../main")
    }
  }

  render() {
    return (
      <div className="app" ref={el => (this.div = el)}>
        <div ref={el => (this.div = el)}>
  Hello
          // <Switch />
          // <Intro />
          // <SectionBackground />
          // <Skills />
          // <Experience />
          // <FeaturedProjects />
          // <OtherProjects />
          // {/* <BlogRoll/> */}
          // <Whatsnext />
          // {/* <Blogs/> */}
          // <Footer />
          // <button id="top-button">
          //   <img src="images/emojis/pointing-up.png" alt="" />
          // </button>
        </div>
      </div>
    )
  }
}

export default MainPage
