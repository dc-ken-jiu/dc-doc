module.exports = {
    base: '/dc-doc/',
    title: 'dc-doc',
    description: '前端开发体系',
    head: [
        ['link', { rel: 'icon', href: 'favicon.ico' }]
    ],
    themeConfig: {
        displayAllHeaders: true,
        sidebarDepth: 0,
        repo: "https://github.com/dc-ken-jiu/dc-doc.git",
        repoLabel: "GitHub",
        docsDir: "docs",
        editLinks: true,
        editLinkText: "错别字纠正",
        sidebarDepth: 3,
        nav: [
            { text: '主页', link: '/' },
            { text: '脚手架', link: '/cli/' },
            { text: '方法库', link: '/util/' },
            { text: '网络库', link: '/http/' },
            { text: '组件库', link: '/component/' },
            { text: '技术文档', link: '/tecdoc/' },
            { text: '前端规范', link: '/standard' },
            {
                text: '其他',
                ariaLabel: 'Language Menu',
                items: [
                    { text: '搭建私有npm库', link:'/tools/docker_verdaccio' }
                ]
            },
            { text: 'Changelog', link: '/logs' },
        ],
        sidebar: {
            "/cli/": [""],
        }
    }
}