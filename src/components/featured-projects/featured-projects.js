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
                <img
                  src="{{site.baseurl}}/img/featured/blistabloc/blistabloc.png"
                  alt=""
                ></img>
              </a>
            </figure>
            <figcaption class="project__caption">
              <div class="project__name">
                <a href="https://blistabloc.com/" target="_blank">
                  blistabloc
                </a>
              </div>
              <p>
                Custom wordpress theme built with Timber and Woocommerce for
                blistabloc, the only reactive shoe insert that prevents blisters
                from forming.
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
                  <img
                    src="{{site.baseurl}}/img/featured/screentime/screentime1.png"
                    alt=""
                  />
                </div>
                <div class="phone">
                  <img
                    src="{{site.baseurl}}/img/featured/screentime/screentime3.png"
                    alt=""
                  />
                </div>
                <div class="phone">
                  <img
                    src="{{site.baseurl}}/img/featured/screentime/screentime4.png"
                    alt=""
                  />
                </div>
              </a>
            </figure>
            <figcaption class="project__caption">
              <div class="project__name">
                <a
                  href="https://play.google.com/store/apps/details?id=com.starry.management"
                  target="_blank"
                >
                  ScreenTime 2.0
                </a>
              </div>
              <p>
                Starry Station feature that provided users with the ability to
                easily filter content, pause the internet, and even create
                custom rules for blocking apps like Facebook and Twitter right
                from their phones.
              </p>
            </figcaption>
          </div>

          <div class="project interventions">
            <figure class="project__pic">
              <a href="https://interventions.design/" target="_blank">
                <img
                  src="{{site.baseurl}}/img/featured/interventions/interventions.png"
                  alt=""
                />
              </a>
            </figure>
            <figcaption class="project__caption">
              <div class="project__name">
                <a href="https://interventions.design/" target="_blank">
                  Interventions
                </a>
              </div>
              <p>
                Interactive marketing website for Northeastern's first annual
                student-led design conference, Interventions.
              </p>
            </figcaption>
          </div>
        </div>
      </section>
    )
  }
}

export default FeaturedProjects
