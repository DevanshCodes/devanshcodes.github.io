import React from "react"
// import { Link } from "gatsby"
import "./index.scss"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div>
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
        <span class="name"> Devansh Agarwal</span>, a design-minded front-end
        software engineer focused on building beautiful interfaces &amp;
        experiences
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
  </div>
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>
)

export default IndexPage
