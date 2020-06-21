module.exports = {
  siteMetadata: {
    title: "My notes",
    description: `Notes on code`,
    author: "Razvan",
    showDescriptionInSidebar: true,
    logo:
      "https://raw.githubusercontent.com/mrmartineau/gatsby-theme-code-notes/master/assets/logo.png",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showThemeInfo: false,
        showDescriptionInSidebar: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Notes`,
        short_name: `CodeNotes`,
        description: `Notes on code. My memory bank.`,
        start_url: `/`,
        background_color: `hsl(210, 38%, 95%)`,
        theme_color: `hsl(345, 100%, 69%)`,
        display: `standalone`,
        // icon: `static/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/tag/*`],
      },
    },
  ],
  pathPrefix: "/code-notes",
};
