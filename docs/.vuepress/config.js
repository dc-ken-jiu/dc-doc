module.exports = {
	base: '/dc-cli_vuepress/',
	title: 'dc-cli',
	description: '一个用于拉取模板项目的脚手架工具',
	head: [
		['link', { rel: 'icon', href: 'favicon.ico' }]
	],
	themeConfig: {
		displayAllHeaders: true,
		sidebarDepth: 0,
    nav: [
      { text: '指南', link: '/' },
      { text: 'Changelog', link: '../guide/CHANGELOG.md' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/dc-cli' },
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