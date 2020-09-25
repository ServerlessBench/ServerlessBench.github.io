## ServerlessBench开源报告·第1期（2020年9月21日）



2020年9月的主要任务为完善论文的终稿，下载地址如下：

- 论文：https://serverlessbench.systems/socc20-serverlessbench.pdf

- 代码：https://github.com/SJTU-IPADS/ServerlessBench



下面会简要介绍当前版本的测试内容，以及该项目的后续计划。

### ServerlessBench的10个测试集

1. 两阶段ALU应用。
   分两个执行阶段：1）连接S3并请求一个数值N；2）循环进行N次ALU运算。
   提供两个版本的实现，用于比较函数拆分对资源利用率的影响：1）单函数版本；2）拆分函数版本，两个函数分别对应两个执行阶段。
2. 可并行ALU应用。
   提供三个版本的实现，用于比较serverless并行执行方式：1）串行版本；2）函数并行版本；3）函数内并行版本。
3. 长链数组加和应用（函数数量可配置）。
   提供两个版本的实现，用于比较不同函数组成方式的特性：1）sequence chain版本；2）nested chain版本。
4. 真实场景serverless应用。
   包括四个应用：1）图像处理；2）Alexa技能；3）在线编译；4）数据分析。
5. 图像传输应用（传输大小可配置）。
   包括三个平台上的实现，用于比较不同平台的函数间通信开销：1）OpenWhisk（Action Sequence通信）；2）Fn（Fn Flow通信）；3）AWS Lambda（AWS Step Functions或S3通信）。
6. 不同语言运行时的serverless函数，可分析不同平台上的启动性能。
   包括Fn和OpenWhisk上的版本。
7. 不同语言运行时的serverless函数，可分析不同sandbox的启动性能。
   Node.js, Python, Ruby三种语言。
   各包括一个简单hello和一个应用函数。
8. 不同大小的函数。
   由handler函数+不同大小的依赖包组成。
9. C和Java的Hello函数，可用于分析并行启动性能。
10. Java图像处理函数，可用于分析系统状态丢失带来的性能开销。



### 后续（短期）计划

近期计划主要包含两方面：

- 完善现有平台的测试以及支持新的平台（如Microsoft Azure）；
- 增加真实场景模拟，目前计划以“Serverless in the Wild" [ATC'20]中的场景为主，在OpenWhisk上运行。

如果有任何需求，欢迎通过微信群或github和我们联系。



