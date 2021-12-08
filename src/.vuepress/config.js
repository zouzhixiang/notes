module.exports = {
  title: '笔记',
  base: '/notes/',
  dest: './docs',
  displayAllHeaders: true,
  themeConfig: {
    nav: [
      { text: '前端', link: '/fe/' },
      { text: '后端', link: '/fb/' },
      { text: '工具', link: '/tools/' }
    ],
    siderbar: {
      '/tools/': [
        {
          title: 'vscode',
          sidebarDepth: 0,
          path: '/tools/vscode'
        },
        {
          title: 'git',
          sidebarDepth: 0,
          path: '/tools/git'
        }
      ]
    }
  }
}