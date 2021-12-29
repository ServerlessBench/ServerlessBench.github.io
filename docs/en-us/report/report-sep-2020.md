## ServerlessBench Open-source Report - the 1st issue (Sep 21st, 2020)


Our major work in September is to complete the final version of the paper. Links to download:

* Paper: https://serverlessbench.systems/socc20-serverlessbench.pdf
* Code: https://github.com/SJTU-IPADS/ServerlessBench

We will next briefly introduce the test cases in the current version and the following plans of the project:

### Test cases of ServerlessBench

1. Two-stage ALU application.

   This test case features a CPU-intensive ALU application with two execution phases: In the first phase, it connects to S3 and requests for a number N (Load configuration phase); in the second phase, 100 threads are spawned to conduct arithmetic calculations and loop for N times (Compute phase). 

2. Parallelable ALU application

   This test case features a CPU-intensive ALU application with parallelizable core handling logic. Three versions are presented to analyze parallelization in serverless computing: no-parallel version; instance-parallel version; in-function-parallel version.

2. Long function chain application

   This test case includes the Array Sum application, a serverless application with a configurable number of chained functions. Two versions of the application are provided, implemented with the sequence function chain method and the nested function chain method, respectively.

3. Realworld applications

   This test case includes four real-world serverless applications: Image processing, Alexa skill, Online-compiling, and Data analysis.

4. Data transfer costs

   This test case presents a Node.js serverless application that transfers images with different sizes (the payload size) between two functions. We provide the application to be evaluated on three serverless platforms: OpenWhisk, Fn, AWS Lambda.

6. Startup breakdown

   This test case includes serverless functions with different language runtimes, which can be used to analyze the startup performance of multiple platforms. The applications can be evaluated on two serverless platforms: OpenWhisk, Fn.

7. Sandbox comparison

   A simple Hello function and a more complex serverless function are provided in Python, Ruby, and Node.js.

8. Function size

   The application consists of Python functions with varying package sizes, constructed by packing the handler codes with different dependency packages.

9. Concurrent startup

   Simple Hello functions in C and Java are provided to evaluate the startup latencies when invoked concurrently.

10. Stateless costs

    A Java ImageResize function is provided to analyze the impact of losing implicit states (e.g., JIT profiles) in serverless computing's "stateless" nature.

### Following (short-term) plans

The short-term plans mainly include two parts:

* Further refine the test cases on current platforms and support new platforms (e.g., Microsoft Azure)
* Emulate the real-world scenario. Recently we plan to emulate the scenario in "Serverless in the Wild" [ATC'20] and run the test cases on OpenWhisk

If there is any problem or requirement, welcome to contact us through the Github (issue) or email.