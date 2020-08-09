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
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '面向接口代理的高性能RPC调用',
          content: '提供高性能的基于代理的远程调用能力，服务以接口为粒度，为开发者屏蔽远程调用底层细节。',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: '智能负载均衡',
          content: '内置多种负载均衡策略，智能感知下游节点健康状况，显著减少调用延迟，提高系统吞吐量。',
        },
        {
          img: '/img/feature_service.png',
          title: '服务自动注册与发现',
          content: '支持多种注册中心服务，服务实例上下线实时感知。',
        },
        {
          img: '/img/feature_hogh.png',
          title: '高度可扩展能力',
          content: '遵循微内核+插件的设计原则，所有核心能力如Protocol、Transport、Serialization被设计为扩展点，平等对待内置实现和第三方实现。',
        },
        {
          img: '/img/feature_runtime.png',
          title: '运行期流量调度',
          content: '内置条件、脚本等路由策略，通过配置不同的路由规则，轻松实现灰度发布，同机房优先等功能。',
        },
        {
          img: '/img/feature_maintenance.png',
          title: '可视化的服务治理与运维',
          content: '提供丰富服务治理、运维工具：随时查询服务元数据、服务健康状态及调用统计，实时下发路由策略、调整配置参数。',
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
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: 'Transparent interface based RPC',
          content: 'Dubbo provides high performance interface based RPC, which is transparent to users.',
        },
        {
          img: '/img/feature_loadbalances.png',
          title: 'Intelligent load balancing',
          content: 'Dubbo supports multiple load balancing strategies out of the box, which perceives downstream service status to reduce overall latency and improve system throughput.',
        },
        {
          img: '/img/feature_service.png',
          title: 'Automatic service registration and discovery',
          content: 'Dubbo supports multiple service registries, which can detect service online/offline instantly.',
        },
        {
          img: '/img/feature_hogh.png',
          title: 'High extensibility',
          content: 'Dubbo\'s micro-kernel and plugin design ensures that it can easily be extended by third party implementation across core features like Protocol, Transport, and Serialization.',
        },
        {
          img: '/img/feature_runtime.png',
          title: 'Runtime traffic routing',
          content: 'Dubbo can be configured at runtime so that traffic can be routed according to different rules, which makes it easy to support features like blue-green deployment, data center aware routing, etc.',
        },
        {
          img: '/img/feature_maintenance.png',
          title: 'Visualized service governance',
          content: 'Dubbo provides rich tools for service governance and maintenance such as querying service metadata, health status and statistics.',
        }
      ]
    },
  },
};
