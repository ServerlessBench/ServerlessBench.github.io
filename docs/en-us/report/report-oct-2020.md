## ServerlessBench Open-source Report - the 2nd issue (Oct 26th, 2020)

This is the monthly report of ServerlessBench from 9/21/2020 to 10/26/2020

## Progress

This month we mainly worked on the simulation of the real-world scenario described in "Serverless in the Wild"[ATC' 20] on OpenWhisk. We reference their open-source [traces](https://github.com/Azure/AzurePublicDataset) to determine some parameters in the workload.

We have achieved the following objectives so far:

* Generate function chains (action sequences) with different lengths. The chain lengths satisfy the distribution extracted from the open-source traces.
* Functions in a function chain allocate different sizes of memory. The sizes of the allocated memory satisfies the distribution extracted from the open-source traces

The workload is not finished yet.

## Next Month

Next, we will continue our ongoing work:

* Finish the workload that simulates real-world scenarios
* Refine the test cases on current platforms and support new platforms

If there is any problem or requirement, welcome to contact us through the Github (issue) or email.