export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'serverlessbench.systems', // 站点部署域名
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
        key: 'report',
        text: 'MONTHLY REPORT',
        link:'/en-us/docs/report/report-sep-2020.html',
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
        link: 'https://github.com/SJTU-IPADS/serverlessbench',
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
          text: 'Members',
          link: '/en-us/docs/developers/developers_dev.html',
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
    copyright: 'ServerlessBench is maintained by IPADS Lab @ Shanghai Jiao Tong Univeristy. The website is generated by docsite using Apache Dubbo as the template.'
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'report',
        text: '月报',
        link:'/zh-cn/docs/report/report-sep-2020.html',
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
        link: 'https://github.com/SJTU-IPADS/serverlessbench',
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
          text: '成员',
          link: '/zh-cn/docs/developers/developers_dev.html',
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
    copyright: 'ServerlessBench由上海交通大学并行与分布式系统研究所维护。本网页由docsite生成，基于Apache Dubbo网站模板。'
  }
};
