import React, { Component } from "react"
import "./featured-projects.scss"

class FeaturedProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section class="section featured-projects">
        <div class="section__title">Featured Projects</div>
        <div class="section__content">
          <div class="project blistabloc">
            <figure class="project__pic">
              <a href="https://blistabloc.com/" target="_blank">
                <img src="/images/spansberry.png" alt=""></img>
              </a>
            </figure>
            <figcaption class="project__caption">
              <div class="project__name">
                <a href="https://blistabloc.com/" target="_blank">
                  SpansBerry
                </a>
              </div>
              <p>
                Spansberry project aims to provide a discussion platform to all
                community members which can easily organize various topics for
                discussions under different categories and start/continue
                discussion on any topic.
              </p>
            </figcaption>
          </div>

          <div class="project screentime">
            <figure class="project__pic phones">
              <a
                href="https://play.google.com/store/apps/details?id=com.starry.management"
                target="_blank"
              >
                <div class="phone">
                  <img src="/images/Apogee1.png" alt="" />
                </div>
                <div class="phone">
                  <img src="/images/Apogee2.png" alt="" />
                </div>
                <div class="phone">
                  <img src="/images/Apogee3.png" alt="" />
                </div>
              </a>
            </figure>
            <figcaption class="project__caption">
              <div class="project__name">
                <a
                  href="https://play.google.com/store/apps/details?id=com.starry.management"
                  target="_blank"
                >
                  Official Apogee'20 App
                </a>
              </div>
              <p>
                Official Application Designed for Apogee'20, BITS Pilani's
                Annual Technical Fest. Users can track Events, Order Food
                online, keep track of Kind Store points and Event Signings!
              </p>
            </figcaption>
          </div>

          <div class="project interventions">
            <figure class="project__pic">
              <a href="https://interventions.design/" target="_blank">
                <img src="/images/anonymousDiscussion.png" alt="" />
              </a>
            </figure>
            <figcaption class="project__caption">
              <div class="project__name">
                <a href="https://interventions.design/" target="_blank">
                  Anonymous Discussion
                </a>
              </div>
              <p>
                A Chat Room application using ReactJS, NodeJS and Socket.io, in
                which user can join a room with a roomID and chat anonymously
                with preferred username.
              </p>
            </figcaption>
          </div>
        </div>
      </section>
    )
  }
}

export default FeaturedProjects
