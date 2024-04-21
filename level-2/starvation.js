function a() {
    console.log('A');
    b();
}

function b() {
    console.log('B');
    a();
}

setTimeout(() => {
    // this will be delayed if longRunningTask is still running
    console.log('Scheduled task executed.');
}, 0);

a();

/**
 * In computer science, starvation is a situation where a process is unable to access a resource it needs due to competing processes continuously acquiring the resource.
 * In the context of JavaScript, this can happen when an asynchronous task is blocked from executing by other tasks that are currently running.
 * 
 * JavaScript uses a single-threaded event loop to manage asynchronous tasks. When an asynchronous task is scheduled, it is added to a queue and executed when the event 
 * loop gets to it. However, if there are other long-running tasks that are blocking the event loop, the asynchronous task may be delayed, leading to starvation.
 * 
 * solution: To avoid starvation, it’s important to ensure that long-running tasks are executed asynchronously so that they don’t block the event loop. One way to do 
 * this is to use Web Workers, which allow you to execute scripts in a separate thread. Another way is to break up long-running tasks into smaller chunks and use 
 * setTimeout() or setInterval() to schedule each chunk as a separate task, allowing the event loop to process other tasks in between.
 */