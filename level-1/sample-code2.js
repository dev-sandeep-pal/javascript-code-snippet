myFun();

var myFun = function () {
    console.log("First");
}

myFun();

function myFun() {
    console.log("Second");
}

myFun();

// hint: function hosting

/**
 * Second
 * First
 * First
 */