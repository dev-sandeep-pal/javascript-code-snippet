const obj = {
    name: "Sandeep Pal"
};

console.log(obj.name);
delete obj.name;
console.log(obj.name);

/**
 * Sandeep Pal
 * undefined
 */

const obj1 = Object.create({
    name: "Sandeep Pal"
});

console.log(obj1.name);
delete obj1.name;
console.log(obj1.name);