variable = 30;

(() => {
    foo = 100;
    console.log(variable);
    var foo = 100;
    variable = 20;
    console.log(variable);
})();

console.log(foo);
console.log(variable);
var variable = 30;

/**
 * 30
 * 20
 * ReferenceError: foo is not defined 
 */