import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: 'ServerlessBench',
      briefIntroduction: 'Serverless 平台开源的分析与测试集。',
      getStartedButton: {
        text: '快速开始',
        link: '/zh-cn/docs/user/quick-start.html',
      },
      viewOnGithubButton: {
        text: 'GITHUB',
        link: 'https://github.com/ServerlessBench/ServerlessBench',
      },
      Dubbo3Button: {
        text: 'SOCC 2020 论文',
        link: '#',
      }
    },
    introduction: {
      title: 'Serverless计算基准测试集',
      desc: 'ServerlessBench是一个通用的，简单的，易用的Serverless计算基准测试集，旨在为Serverless函数用户以及平台开发者提供关键性的见解，从而帮助他们更加深入地理解并优化自己的工作。',
      img: '/img/serverlessbench-app-workloads.png',
    },
    features: {
      title: '为什么选择ServerlessBench?',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '包含指标齐全',
          content: 'ServerlessBench包含了各式各样的、完备的测试指标，包括Serverless从性能到应用的组成方式等多个方面，方便使用者对Serverless应用进行全方位的刻画与分析。',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '包含语言齐全',
          content: 'ServerlessBench包含了C、Java、Python、Nodejs、Ruby多种语言，可以用于分析多种语言作为Serverless函数的特性，同时便于多种语言的开发者使用。',
        },
        {
          img: '/img/feature_service.png',
          title: '支持开源平台和公有云平台',
          content: 'ServerlessBench的部署环境包含了开源平台（如OpenWhisk，Fn）以及常用的公有云平台（AWS Lambda），因此既可以从Serverless平台开发者的角度对Serverless函数的完整运行过程进行测试，也可以从用户的角度分析应用在商用平台上的特点。',
        },
        {
          img: '/img/feature_hogh.png',
          title: '集成了真实场景应用',
          content: 'ServerlessBench收集了现实中具有代表性的四个热门应用，方便代表Serverless应用在现实场景中的特性。',
        },
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: 'ServerlessBench',
      briefIntroduction: 'ServerlessBench is a comprehensive benchmark suite for characterizing serverless platforms.',
      getStartedButton: {
        text: 'GET STARTED',
        link: '/en-us/docs/user/quick-start.html',
      },
      viewOnGithubButton: {
        text: 'GITHUB',
        link: 'https://github.com/ServerlessBench/ServerlessBench',
      },
      Dubbo3Button: {
        text: 'SOCC 2020 paper comming soon...',
        link: '#',
      }
    },
    introduction: {
	    title: 'Serverless Benchmark Suite',
      desc: 'ServerlessBench is a general, simple, flexible benchmark suite for serverless computing, which intends to provide both serverless function users and infrastructure developers with key insights and helps them to understand their work more deeply.',
      img: '/img/serverlessbench-app-workloads.png',
    },
    features: {
      title: 'Why ServerlessBench?',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Complete and Serverless-customized metrics',
          content: 'ServerlessBench evaluates various and complete metrics in different aspects of Serverless computing, including performance, composition methods, and so on. It helps users to thoroughly profile and analyze serverless applications.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Diverse function languages',
          content: 'ServerlessBench consists of multiple languages, including C, Java, Python, NodeJS and Ruby. It enables the analysis of the characteristics of Serverless applications written by different languages. Moreover, it is convenient for different language developers to use.',
        },
        {
          img: '/img/feature_service.png',
          title: 'Supporting both open-sourced platforms and commercial public cloud',
          content: 'ServerlessBench comprises of workloads designed for open-source platforms (OpenWhisk, Fn) and a popular commercial public cloud (AWS Lambda). Users can not only evaluate the complete process of a serverless application from serverless platform developers perspective, but also characterize serverless applications on commercial platforms from serverless computing users perspective.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'Real-world applications',
          content: 'ServerlessBench collects four popular real-world applications, representing the features of serverless applications in the real world.',
        },
      ]
    },
  },
};
