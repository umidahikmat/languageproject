const { description } = require('../../package')

module.exports = {
  base: "/languageproject/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Language Project',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    smoothScroll: true,
    nav: [
      {
        text: 'Home',
        link: '/docs/introduction'
      },
      {
        text: 'Lessons',
        link: '/docs/lesson1',
      },
      {
        text: 'Resources',
        link: '/docs/audio',
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Home',
          collapsable: false,
          children: [
            'introduction'
          ]
        },
        {
          title: 'Lessons',
          collapsable: false,
          children: [
            'lesson1',
            'lesson2'
          ]
        },
        {
          title: 'Resources',
          collapsable: false,
          children: [
            'audio',
            'video'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: []
}
