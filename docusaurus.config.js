const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "carefree-drawboard",
  url: "https://carefree0910.me",
  baseUrl: "/carefree-drawboard-doc/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "./img/favicon.ico",
  organizationName: "carefree0910", // Usually your GitHub org/user name.
  projectName: "carefree-drawboard-doc", // Usually your repo name.
  stylesheets: ["https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"],
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    announcementBar: {
      id: "supportus",
      content:
        '⭐️ If you like carefree-drawboard, give it a star on <a target="_blank" href="https://github.com/carefree0910/carefree-drawboard">GitHub</a>! ⭐️',
    },
    navbar: {
      title: "🎨",
      items: [
        {
          to: "docs/getting-started",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/carefree0910/carefree-drawboard",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/getting-started",
            },
            {
              label: "Installation",
              to: "docs/getting-started/installation/",
            },
            {
              label: "Design Philosophy",
              to: "docs/reference/design-philosophy/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/carefree0910/carefree-drawboard",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/carefree0910",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} carefree-drawboard, carefree0910. Built with Docusaurus.`,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
