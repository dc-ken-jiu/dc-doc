module.exports = {
	base: '/crxcli_vuepress/',
	title: 'crx-cli',
	description: '一个用于vue项目搭建的脚手架工具',
	head: [
		['link', { rel: 'icon', href: 'favicon.ico' }]
	],
	themeConfig: {
		displayAllHeaders: true,
		sidebarDepth: 0,
    nav: [
      { text: '指南', link: '/' },
      { text: 'Changelog', link: '../guide/CHANGELOG.md' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/crx-cli' },
		],
		sidebar: [
			{
        title: '介绍',
        collapsable: false,
        children: [
          '/guide/'
        ]
			},
			{
				title: '使用说明',
				children: [
					'/guide/install',
					'/guide/use',
					'/guide/example'
				]
			}
    ]
  }
}