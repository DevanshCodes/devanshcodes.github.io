module.exports = {
  siteMetadata: {
    title: `Devansh Agarwal`,
    description: `I'm Devansh Agarwal, a design-minded full-stack web developer, focused on designing and developing beautiful interfaces.`,
    author: `@DevanshAgarwal`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "./src/styles/styles";`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://unpkg.com/scrollreveal", // Change to the script filename
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devansh Agarwal`,
        short_name: `DevanshAg`,
        start_url: `/`,
        background_color: `#171c28`,
        theme_color: `#171c28`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
