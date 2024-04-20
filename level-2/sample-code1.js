function a() {
    console.log('A');
}

setTimeout(() => console.log('B'), 0);

a();

console.log('C');

Promise.resolve().then(() => console.log('D'));

/**
 * task queue / callback queue (low priority)
 * microtask queue (high priority)
 * event loop
 * call stack
 * web API
 * GEC
 */

/**
 * callback starvation:

https://felixgerschau.com/javascript-event-loop-call-stack/


function a() {
    b();
}

function b() {
    a();
}

a();
 */