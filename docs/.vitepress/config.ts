import { defineConfig } from 'vitepress'

/**
 * 参考：https://vitepress.vuejs.org/config/app-configs.html
 * 
 * 修改这里需要重启项目才可以生效
 */

const config = defineConfig({
  title: 'Lelang',
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',
    lastUpdatedText: '最后更新时间',
    editLink: {
      pattern: 'https://github.com/xwtlt/lelang/edit/main/docs/:path',
      text: '✍️ 帮助改善此页面',
    },
    localeLinks: {
      text: '',
      items: [
        { text: 'English', link: '/' },
        { text: '简体中文', link: '/' },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xwtlt/lelang'
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/xwtlt/'
      }
    ],
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Configs', link: '/configs' },
      { text: 'Template', link: '/template' },
      { text: 'Ads',
        items: [
          { text: '小张的小站', link: 'https://likf.eu.org' },
          { text: '茶室集团', link: 'http://teaverse.github.io' },
          { text: '乐色报纸', link: 'http://p.licn.eu.org' }
        ],
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' }
        ],
      },
      {
        text: 'SMTL',
        items: [
          { text: 'Getting Started', link: '/guide/stml-get' },
          { text: '使用', link: '/guide/stml-config' }
        ]
      },
      {
        text: 'Tiby',
        items: [
          { text: 'Getting Started', link: '/guide/tiby-get' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-2022 Litek Teahouse / LesePaper Foundation'
    }
  }
})

export default config
