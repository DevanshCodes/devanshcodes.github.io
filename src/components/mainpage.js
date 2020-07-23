import React, { Component } from "react"
import "./mainpage.scss"
import ScrollReveal from "scrollreveal"
import skills from "../../static/content/skills"
import experiences from "../../static/content/experience"
import otherProjects from "../../static/content/other-projects"
import social from "../../static/content/social"
import $ from "jquery"
import sr from './ScrollReveal'


class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const d = new Date()
    const hours = d.getHours()
    const night = hours >= 19 || hours <= 7 // between 7pm and 7am
    const body = document.querySelector("body")
    const toggle = document.getElementById("toggle")
    const input = document.getElementById("switch")
    if (night) {
      input.checked = true
      body.classList.add("night")
    }
    toggle.addEventListener("click", function () {
      const isChecked = input.checked
      if (isChecked) {
        body.classList.remove("night")
      } else {
        body.classList.add("night")
      }
    })

    const introHeight = document.querySelector(".intro").offsetHeight
    const topButton = document.getElementById("top-button")
    const $topButton = $("#top-button")

    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > introHeight) {
          $topButton.fadeIn()
        } else {
          $topButton.fadeOut()
        }
      },
      false
    )

    topButton.addEventListener("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500)
    })

    const hand = document.querySelector(".emoji.wave-hand")

    function waveOnLoad() {
      hand.classList.add("wave")
      setTimeout(function () {
        hand.classList.remove("wave")
      }, 2000)
    }

    setTimeout(function () {
      waveOnLoad()
    }, 1000)

    hand.addEventListener("mouseover", function () {
      hand.classList.add("wave")
    })

    hand.addEventListener("mouseout", function () {
      hand.classList.remove("wave")
    })

    window.sr = ScrollReveal({
      reset: false,
      duration: 600,
      easing: "cubic-bezier(.694,0,.335,1)",
      scale: 1,
      viewFactor: 0.3,
    })

    sr.reveal(".background")
    sr.reveal(".skills")
    sr.reveal(".experience", { viewFactor: 0.2 })
    sr.reveal(".featured-projects", { viewFactor: 0.1 })
    sr.reveal(".other-projects", { viewFactor: 0.05 })
    const script = document.createElement("script")
    script.async = true
    script.src = "../../static/main.js"
    document.body.appendChild(script)
  }

  render() {
    return (
      <div className="app" ref={el => (this.div = el)}>
        <div ref={el => (this.div = el)}>
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
          <header class="intro">
            <h1 class="intro__hello">
              Hello!
              <span class="emoji wave-hand animated"></span>
            </h1>

            <h2 class="intro__tagline">
              I'm
              <span class="name"> Devansh Agarwal</span>, a design-minded
              full-stack web developer, focused on building beautiful interfaces
              &amp; experiences
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
          <section class="section background">
            <div class="section__title">Background</div>
            <div class="section__content">
              <p>
                I'm currently an Engineer at
                <a
                  class="underline-link"
                  href="https://www.upstatement.com/"
                  target="_blank"
                >
                  Upstatement
                </a>{" "}
                building things for the web with some awesome people. I recently
                graduated from
                <a
                  class="underline-link"
                  href="http://www.ccis.northeastern.edu/"
                  target="_blank"
                >
                  Northeastern University
                </a>{" "}
                after completing three awesome six-month co-ops at
                <a
                  class="underline-link"
                  href="https://us.mullenlowe.com/"
                  target="_blank"
                >
                  MullenLowe U.S.
                </a>
                ,
                <a
                  class="underline-link"
                  href="https://starry.com/"
                  target="_blank"
                >
                  Starry
                </a>
                , and
                <a
                  class="underline-link"
                  href="https://www.apple.com/music/"
                  target="_blank"
                >
                  Apple Music
                </a>
                .
              </p>

              <p>
                As a software engineer, I enjoy bridging the gap between
                engineering and design &mdash; combining my technical knowledge
                with my keen eye for design to create a beautiful product. My
                goal is to always build applications that are scalable and
                efficient under the hood while providing engaging, pixel-perfect
                user experiences.
              </p>

              <p>
                <strong>When I'm not in front of a computer screen</strong>, I'm
                probably snowboarding, cruising around on my penny board, or
                crossing off another item on my bucket list.
              </p>
            </div>
          </section>
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
            </div>
          </section>
          <section class="section experience">
            <div class="section__title">Experience</div>
            <div class="section__content">
              <div class="jobs">
                {experiences.map(experience => {
                  return (
                    <div class="job">
                      <div class="time-place">
                        <div class="job__company">
                          <a href="{{job.url}}" target="_blank">
                            {experience.company}
                          </a>
                        </div>
                        <div class="job__time">{experience.time}</div>
                      </div>
                      <div class="job__position">{experience.position}</div>
                    </div>
                  )
                })}
              </div>

              <a href="{{site.resume}}" target="_blank" class="arrow-link">
                View My Resume
              </a>
            </div>
          </section>
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
                    blistabloc, the only reactive shoe insert that prevents
                    blisters from forming.
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
                    Starry Station feature that provided users with the ability
                    to easily filter content, pause the internet, and even
                    create custom rules for blocking apps like Facebook and
                    Twitter right from their phones.
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
                    Interactive marketing website for Northeastern's first
                    annual student-led design conference, Interventions.
                  </p>
                </figcaption>
              </div>
            </div>
          </section>
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
          <footer class="footer">
            <div class="footer__copyright">
              <div class="top">
                <span>Designed &amp; Developed by</span>
              </div>
              <div class="bottom">
                <span>Brittany Chiang</span>
                <img
                  class="emoji"
                  src="/images/emojis/rockon.png"
                  alt="emoji"
                />
                <span>2018</span>
              </div>
            </div>
            <div class="footer__links">
              {social.map(social => {
                return (
                  <a href={social.url} target="_blank" title={social.title}>
                    <span class="text">{social.title}</span>
                    <img
                      src={`/images/social/${social.title}.svg`}
                      alt={social.title}
                    />
                  </a>
                )
              })}
            </div>
          </footer>
          <button id="top-button">
            <img src="images/emojis/pointing-up.png" alt="" />
          </button>
        </div>
      </div>
    )
  }
}

export default MainPage
