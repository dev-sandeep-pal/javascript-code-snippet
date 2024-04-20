var temp = 10;

// IIFE
(() => {
    console.log(temp);

    temp = 20;

    console.log(temp);
})();

console.log(temp);

var temp = 30;

/**
 * 10
 * 20
 * 20
 */