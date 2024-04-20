const tom = {
    name: 'Tom Curuz',
    getName: function () {
        console.log(this.name);
    },
};

// setTimeout(tom.getName, 1000);

/**
 * undefined
 * setTimeout is a webAPI, and on webAPI context it doesn't know getName this scope
 */

setTimeout(tom.getName.bind(tom), 1000);
setTimeout(() => tom.getName(), 1000);

/**
 * bind() method returns the new function with attached context passed as variable
 */