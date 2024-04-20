myFun();

let myFun = function () {
    console.log("First");
}

myFun();

function myFun() {
    console.log("Second");
}

myFun();

// hint: function hosting

/**
 * error: SyntaxError: Identifier 'myFun' has already been declared
 */