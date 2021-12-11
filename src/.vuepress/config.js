module.exports = {
  title: '笔记',
  base: '/notes/',
  dest: './docs',
  displayAllHeaders: true,
  themeConfig: {
    nav: [
      { text: '前端', link: '/fe/js' },
      { text: '后端', link: '/fb/node' },
      { text: '数据库', link: '/database/sqlServer' },
      { text: 'devOps', link: '/devOps/nginx' },
      { text: '常见问题', link: '/qr/' },
      { text: '工具', link: '/tools/git' },
    ],
    sidebar: {
      '/fe/': [
        {
          title: 'JavaScript',
          path: 'js'
        },
        {
          title: 'TypeScript',
          path: 'ts'
        }
      ],
      '/fb/': [
        {
          title: 'Node',
          path: 'node'
        }
      ],
      '/database/': [
        {
          title: 'SQL Server',
          path: 'sqlServer'
        }
      ],
      '/devOps/': [
        {
          title: 'Nginx',
          path: 'nginx'
        }
      ],
      '/qr/': [
        ''
      ],
      '/tools/': [
        {
          title: 'Git',
          path: 'git'
        },
        {
          title: 'VS Code',
          path: 'vscode'
        }
      ]
    }
  }
}