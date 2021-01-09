//import dotenv from 'dotenv';

//dotenv.config({ path: '.env' });

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "onehundreddays",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT
      },
    },
    {
    resolve: `gatsby-plugin-styled-components`,
      options: {
        // Change plugin default options here, e.g.:
        // ssr: false
        // displayName: false,
        // minify: false
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    //"gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
