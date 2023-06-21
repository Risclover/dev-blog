// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Musings of a Software Engineer",
  tagline: "A blog containing the musings and ramblings of a passionate software engineer.",
  favicon: "https://avatars.githubusercontent.com/u/85785443?v=4",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Risclover", // Usually your GitHub org/user name.
  projectName: "dev-blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "https://avatars.githubusercontent.com/u/85785443?v=4",
      navbar: {
        title: "Ramblings of a Software Engineer",
        logo: {
          alt: "My Site Logo",
          src: "https://avatars.githubusercontent.com/u/85785443?v=4",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Categories",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Projects",
            items: [
              {
                label: "Airbnbeezy",
                href: "https://air-bnbeezy.herokuapp.com",
              },
              {
                label: "Reduncrate",
                href: "https://reduncrate.herokuapp.com",
              },
              {
                label: "Ribbit",
                href: "https://ribbit-app.herokuapp.com",
              },
            ],
          },
          {
            title: "Developer Links",
            items: [
              {
                label: "Portfolio",
                href: "https://risclover.github.io",
              },
              {
                label: "Github",
                href: "https://www.github.com/Risclover",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/sara-dunlop",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sara Dunlop, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
