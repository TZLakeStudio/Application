import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '机器人学院学生手册',
  tagline: '一站式的学生信息获取站点',
  favicon: 'img/favicon.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://application-chi-one.vercel.app/',
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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      hideOnScroll: true,
      title: '学生手册',
      logo: {
        alt: '机器人学院学生手册Logo',
        src: 'img/logo.png',
      },
      items: [
        // 左
        {
          type: 'docSidebar',
          sidebarId: 'start',
          label: '入学',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'life',
          label: '生活',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'study',
          label: '学业',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'graduate',
          label: '毕业',
          position: 'left',
        },

        // 右
        {
          to: '/about',
          label: '关于我们',
          position: 'right',
          activeBasePath: `/about`
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
      copyright: `Copyright © ${new Date().getFullYear()} <a href="./about">桃子湖工作站</a>.`,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
