import React from "react"
import "./404.scss"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className="not-found">
    <SEO title="404: Not found" />
    <div class="name">Devansh Agarwal</div>
    <img src="/images/emojis/thinking-face.png" alt=""></img>
    <h1>Hmmm...</h1>
    <h2>
      Looks like there's nothing here.
      <br />
      Maybe you should go back <a href="/">home</a>.{" "}
    </h2>
  </div>
)

export default NotFoundPage
