import { defineConfig } from 'vitepress'

/**
 *  https://vitepress.vuejs.org/config/app-configs.html
 */

const config = defineConfig({
  title: 'Lelang',
  lastUpdated: true,

  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/114280360?s=200&v=4',
    lastUpdatedText: '最后更新时间',
    editLink: {
      pattern: 'https://github.com/litekcn/water/edit/main/docs/:path',
      text: '✍️ 帮助改善此页面',
    },
    localeLinks: {
      text: '',
      items: [
        { text: 'English', link: '/en/index' },
        { text: '简体中文', link: '/' },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/litekcn/water'
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/xwtlt/'
      }
    ],
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Component', link: '/component/library' },
      { text: 'Template', link: '/template' }
        ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Get Started', link: '/guide/get-started' }
        ],
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' }
        ],
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-2023 Litek Community'
    }
  }
})

export default config
