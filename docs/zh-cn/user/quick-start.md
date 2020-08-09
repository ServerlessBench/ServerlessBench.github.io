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
Dubbo 采用全 Spring 配置方式，透明化接入应用，对应用没有任何 API 侵入，只需用 Spring 加载 Dubbo 的配置即可，Dubbo 基于 [Spring 的 Schema 扩展](https://docs.spring.io/spring/docs/4.2.x/spring-framework-reference/html/xsd-configuration.html) 进行加载。

如果不想使用 Spring 配置，可以通过 [API 的方式](./configuration/api.md) 进行调用。

## 服务提供者

完整安装步骤，请参见：[示例提供者安装](../admin/install/provider-demo.md)

### 定义服务接口

DemoService.java [^1]：

```java
package org.apache.dubbo.demo;

public interface DemoService {
    String sayHello(String name);
}
```

### 在服务提供方实现接口

DemoServiceImpl.java [^2]：

```java

package org.apache.dubbo.demo.provider;
 
import org.apache.dubbo.demo.DemoService;
 
public class DemoServiceImpl implements DemoService {
    public String sayHello(String name) {
        return "Hello " + name;
    }
}
```

### 用 Spring 配置声明暴露服务 

provider.xml：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:dubbo="http://dubbo.apache.org/schema/dubbo"
    xsi:schemaLocation="http://www.springframework.org/schema/beans        http://www.springframework.org/schema/beans/spring-beans-4.3.xsd        http://dubbo.apache.org/schema/dubbo        http://dubbo.apache.org/schema/dubbo/dubbo.xsd">
 
    <!-- 提供方应用信息，用于计算依赖关系 -->
    <dubbo:application name="hello-world-app"  />
 
    <!-- 使用multicast广播注册中心暴露服务地址 -->
    <dubbo:registry address="multicast://224.5.6.7:1234" />
 
    <!-- 用dubbo协议在20880端口暴露服务 -->
    <dubbo:protocol name="dubbo" port="20880" />
 
    <!-- 声明需要暴露的服务接口 -->
    <dubbo:service interface="org.apache.dubbo.demo.DemoService" ref="demoService" />
 
    <!-- 和本地bean一样实现服务 -->
    <bean id="demoService" class="org.apache.dubbo.demo.provider.DemoServiceImpl" />
</beans>
```

### 加载 Spring 配置 

Provider.java：

```java
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class Provider {
    public static void main(String[] args) throws Exception {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/dubbo-demo-provider.xml"});
        context.start();
        System.in.read(); // 按任意键退出
    }
}
```

## 服务消费者

完整安装步骤，请参见：[示例消费者安装](../admin/install/consumer-demo.md)

### 通过 Spring 配置引用远程服务

consumer.xml：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:dubbo="http://dubbo.apache.org/schema/dubbo"
    xsi:schemaLocation="http://www.springframework.org/schema/beans        http://www.springframework.org/schema/beans/spring-beans-4.3.xsd        http://dubbo.apache.org/schema/dubbo        http://dubbo.apache.org/schema/dubbo/dubbo.xsd">
 
    <!-- 消费方应用名，用于计算依赖关系，不是匹配条件，不要与提供方一样 -->
    <dubbo:application name="consumer-of-helloworld-app"  />
 
    <!-- 使用multicast广播注册中心暴露发现服务地址 -->
    <dubbo:registry address="multicast://224.5.6.7:1234" />
 
    <!-- 生成远程服务代理，可以和本地bean一样使用demoService -->
    <dubbo:reference id="demoService" interface="org.apache.dubbo.demo.DemoService" />
</beans>
```

### 加载Spring配置，并调用远程服务

Consumer.java [^3]：

```java
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.apache.dubbo.demo.DemoService;
 
public class Consumer {
    public static void main(String[] args) throws Exception {
       ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[] {"META-INF/spring/dubbo-demo-consumer.xml"});
        context.start();
        DemoService demoService = (DemoService)context.getBean("demoService"); // 获取远程服务代理
        String hello = demoService.sayHello("world"); // 执行远程方法
        System.out.println( hello ); // 显示调用结果
    }
}
```


[^1]: 该接口需单独打包，在服务提供方和消费方共享
[^2]: 对服务消费方隐藏实现
[^3]: 也可以使用 IoC 注入
