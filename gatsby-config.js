/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

var today = new Date()
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
var dateTime = date + " " + time

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Gatsby Deployment Testing",
    //    description: "This is my cool blog.",
    description: dateTime,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
