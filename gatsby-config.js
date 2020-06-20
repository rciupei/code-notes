module.exports = {
  siteMetadata: {
    title: "gatsby-starter-code-notes",
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
  ],
  pathPrefix: "/code-notes",
};
