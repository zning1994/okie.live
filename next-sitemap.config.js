/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://okie.live',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // 支持多语言
  alternateRefs: [
    {
      href: 'https://okie.live',
      hreflang: 'en',
    },
    {
      href: 'https://okie.live/?lang=zh',
      hreflang: 'zh',
    },
    {
      href: 'https://okie.live/?lang=ja',
      hreflang: 'ja',
    },
  ],
  // 排除不需要的页面
  exclude: ['/404', '/loading'],
  // 更改频率和优先级
  changefreq: 'weekly',
  priority: 0.7,
}
