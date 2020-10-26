## ServerlessBench开源报告·第2期（2020年10月26日）

这是2020年9月21日至2020月10月26日的月度报告

## 进展

这个月我们主要在OpenWhisk上对"Serverless in the Wild"[ATC' 20] 里描述的现实场景进行模拟。我们参考了他们开源的[traces](https://github.com/Azure/AzurePublicDataset)来设定我们workload中的一些参数。

我们已经达成了如下目标：

* 生成不同长度的函数链（action sequences）。这些函数链的链长满足从该开源traces里计算出来的分布。

* 函数链里面的函数会分配不同大小的内存。这些内存大小满足从该开源traces里面计算出来的分布

目前，这个workload仍未完成。

## 下个月目标

接下来，我们将继续我们正在进行的工作：

* 完成现实场景模拟的workload
* 对现有平台上的测试用例进行优化，并支持新的平台

如果有任何需求，欢迎通过微信群或github和我们联系。