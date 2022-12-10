/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {

  siteMetadata:{
    title:'Simply Recipes',
    description:"Nice and clean recipes site",
    author:"@johnsmilga",
    person:{name:"john", age:32},
    simpleData:['item 1', 'item 2'],
    complexData:[
      {name:"john", age:32},
      {name:"susan", age:30}
    ],

  },


  plugins: [
    `gatsby-plugin-styled-components`,
     `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xn4ziw9ozjmc`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `AMYw7xugjpCMvtEph3gmoJa1Brrd_OccQw6Yvi3ffhU`,
      },
    },
  ],
}
