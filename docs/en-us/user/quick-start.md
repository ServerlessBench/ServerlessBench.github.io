---
title: Quick start
---

# Quick start

## Platform preparation

The test cases have been tested on three serverless platforms: AWS Lambda, OpenWhisk and Fn Project.

### AWS Lambda

- [Create an AWS account](https://portal.aws.amazon.com/billing/signup).
- [Prepare developer tools](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html): `AWS CLI` and `SAM CLI`.


### OpenWhisk

- Setting up OpenWhisk and `wsk` cli tool.
- Check OpenWhisk configuration to make sure it allows at least **20** containers (action invokers) to execute concurrently, or some test cases might stuck and fail due to resource limitation. 


### Fn Project

- Setting up Fn on your host.

## Denpendencies
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

You can install this dependencies in Ubuntu (17.04 or newer) by running:

```
sudo apt-get install maven nodejs jq\
                     gcc-7 g++-7 protobuf-compiler libprotobuf-dev \
                     libcrypto++-dev libcap-dev \
                     libncurses5-dev libboost-dev libssl-dev autopoint help2man \
                     libhiredis-dev texinfo automake libtool pkg-config python3-boto3
```

**It's strongly recommended to use Ubuntu 17.04 or newer**

## Run the tests

Please refer the `README` in each testcase directory for specific instructions to run the tests.

