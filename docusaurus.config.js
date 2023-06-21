// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Musings of a Software Engineer",
  tagline:
    "A blog containing the musings and ramblings of a passionate software engineer.",
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
  trailingSlash: false,

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
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        blogSidebarCount: 0,
        showReadingTime: false,
        postsPerPage: 6,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "https://avatars.githubusercontent.com/u/85785443?v=4",
      navbar: {
        title: "Musings of a Software Engineer",
        logo: {
          alt: "My Site Logo",
          src: "https://avatars.githubusercontent.com/u/85785443?v=4",
        },
        items: [
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/Risclover",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://risclover.github.io",
            label: "Portfolio",
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
        copyright: `Copyright © ${new Date().getFullYear()} Sara Dunlop`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
