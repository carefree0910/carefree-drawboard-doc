module.exports = {
  docs: [
    {
      "Getting Started": [
        "getting-started/index",
        "getting-started/installation",
        "getting-started/project-structure",
      ],
    },
    {
      type: "category",
      label: "Plugins",
      link: {
        type: "doc",
        id: "plugins/index",
      },
      items: [
        "plugins/IFieldsPlugin",
        "plugins/IChatPlugin",
        "plugins/IPluginGroup",
      ],
    },
    {
      "User Guides": [
        "user-guides/cli",
        "user-guides/features",
        "user-guides/keyboard-shortcuts",
        "user-guides/configurations",
        "user-guides/hosting",
        "user-guides/production",
      ],
    },
    {
      "Contributing Guides": [
        "contributing-guides/contributing",
        "contributing-guides/code-of-conduct",
      ],
    },
    {
      "API Reference": [
        "api-reference/Types",
        "api-reference/Config",
        "api-reference/Global-Functions",
        "api-reference/Built-in-Methods",
        "api-reference/IPluginSettings",
        {
          type: "category",
          label: "IPluginInfo",
          link: {
            type: "doc",
            id: "api-reference/IPluginInfo",
          },
          items: [
            "api-reference/IFieldsPluginInfo",
            "api-reference/IChatPluginInfo",
            "api-reference/IPluginGroupInfo",
          ],
        },
        "api-reference/ISocketRequest",
        "api-reference/ISocketMessage",
      ],
    },
    {
      Reference: [
        "reference/design-philosophy",
        "reference/terminology",
        "reference/middleware",
        "reference/brainstorm",
      ],
    },
    {
      About: [
        "about/update-logs",
        "about/roadmap",
        "about/known-issues",
        "about/license",
      ],
    },
  ],
};
