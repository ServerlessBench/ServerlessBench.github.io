---
title: 快速开始
---

# 快速开始

## 测试平台准备

当前的测试集已经被用于在`AWS Lambda`，`OpenWhisk`和`Fn Project`三个serverless平台上测试。

### AWS Lambda

- [创建AWS账号](https://portal.aws.amazon.com/billing/signup).
- [准备相关开发者工具](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html): `AWS CLI` and `SAM CLI`.


### OpenWhisk

- 在测试机器设置好 OpenWhisk 和`wsk` cli 工具.
- 配置 OpenWhisk 的 action invoker 的容器最大并发度为至少 **20** ，否则一些测试可能会由于资源不足而失败. 


### Fn Project

- 在测试机器设置好 Fn 环境。

## 相关依赖
- `gcc` >= 7.0
- `maven` >= 3.6.0
- `nodejs` >= 12.0
- `jq`
- `protobuf-compiler`, `libprotobuf-dev` >= 3.0
- `libcrypto++-dev` >= 5.6.3
- `python3`
- `libcap-dev`
- `libncurses5-dev`
- `libboost-dev`
- `libssl-dev`
- `autopoint`
- `help2man`
- `texinfo`
- `automake`
- `libtool`
- `pkg-config`
- `libhiredis-dev`
- `python3-boto3`

您可以使用以下指令在 Ubuntu 17.04 或更新版本的操作系统上安装这些依赖:

```
sudo apt-get install maven nodejs jq\
                     gcc-7 g++-7 protobuf-compiler libprotobuf-dev \
                     libcrypto++-dev libcap-dev \
                     libncurses5-dev libboost-dev libssl-dev autopoint help2man \
                     libhiredis-dev texinfo automake libtool pkg-config python3-boto3
```

**强烈推荐使用 Ubuntu 17.04 或更新的操作系统**

## 运行测试

对每个测试，请参照对应 testcase 文件夹里的 `README` 指导运行测试。

