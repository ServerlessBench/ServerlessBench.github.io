export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'serverlessbench.github.io', // 站点部署域名
  defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        // target: '_blank',
        // link: '/documentations/2.7/en-us/site/',
        link: '/en-us/docs/user/quick-start.html',
      },
      {
        key: 'developers',
        text: 'DEVELOPERS',
        link: '/en-us/docs/developers/developers_dev.html',
      },
      {
        key: 'download',
        text: 'DOWNLOAD',
        link: 'https://github.com/ServerlessBench/serverlessbench',
      },
    ],
    disclaimer: {
      title: '',
      content: '',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Quick start',
          // link: '/documentations/2.7/en-us/site/',
          link: '/en-us/docs/user/quick-start.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/dev/build.html',
        },
        {
          text: 'Admin manual',
          link: '/en-us/docs/admin/ops/dubbo-ops.html',
        },
        {
          text: 'Report a Doc Issue',
          link: 'https://github.com/ServerlessBench/serverlessbench.github.io/issues/new',
        },
        {
          text: 'Edit This Page on GitHub',
          link: 'https://github.com/ServerlessBench/serverlessbench.github.io/',
        },
      ],
    },
    copyright: 'TODO Copyright © 2018-2019 The Apache Software Foundation. Apache and the Apache feather logo are trademarks of The Apache Software Foundation.',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        // target: '_blank',
        // link: '/documentations/2.7/zh-cn/site/user/quick-start/',
        link: '/zh-cn/docs/user/quick-start.html',
      },
      {
        key: 'developers',
        text: '开发者',
        link: '/zh-cn/docs/developers/developers_dev.html',
      },
      {
        key: 'download',
        text: '下载',
        link: 'https://github.com/ServerlessBench/serverlessbench',
      },
    ],
    disclaimer: {
      title: '',
      content: '',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '快速开始',
          // link: '/documentations/2.7/zh-cn/site/user/quick-start/',
          link: '/zh-cn/docs/user/quick-start.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/dev/build.html',
        },
        {
          text: '运维管理',
          link: '/zh-cn/docs/admin/ops/dubbo-ops.html',
        },
        {
          text: '报告文档问题',
          link: 'https://github.com/ServerlessBench/serverlessbench.github.io/issues/new',
        },
        {
          text: '编辑此文档',
          link: 'https://github.com/ServerlessBench/serverlessbench.github.io/',
        },
      ]
    },
    copyright: 'TODO Copyright © 2018-2019 The Apache Software Foundation. Apache and the Apache feather logo are trademarks of The Apache Software Foundation.'
  }
};
