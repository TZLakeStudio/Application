import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '机器人学院学生手册',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://twis.uk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TZLakeStudio', // Usually your GitHub org/user name.
  projectName: 'Application', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
      },
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: '学生手册',
      logo: {
        alt: '机器人学院学生手册Logo',
        src: 'img/logo.png',
      },
      items: [
        // 左
        {
          to: '/',
          label: '主页',
          position: 'left',
          activeBasePath: '/',
        },
        {
          to: '/docs/study',
          label: '入学',
          position: 'left',
          activeBaseRegex: 'docs/study/(next|v8)',
        },
        {
          to: '/docs/study',
          label: '生活',
          position: 'left',
          activeBaseRegex: 'docs/study/(next|v8)',
        },
        {
          to: '/docs/study',
          label: '学业',
          position: 'left',
          activeBaseRegex: 'docs/study/(next|v8)',
        },
        {
          to: '/docs/study',
          label: '毕业',
          position: 'left',
          activeBaseRegex: 'docs/study/(next|v8)',
        },

        // 右
        {
          to: '/docs/about',
          label: '关于我们',
          position: 'right',
          activeBaseRegex: 'docs/study/(next|v8)',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://robotics.hnu.edu.cn',
          position: 'right',
          html: '<i class="fa-solid fa-house"></i>',
        },
        {
          href: 'https://github.com/TZLakeStudio/Application',
          position: 'right',
          html: '<i class="fa-brands fa-github"></i>',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
