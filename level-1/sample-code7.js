var fullName = "Tom Curuz";

var obj = {
    fullName: "Sandeep Pal",

    prop: {
        fullName: "Inside Prop - fullName",
        getFullName: function () {
            return this.fullName;
        },
    },

    getFullName: function () {
        return this.fullName;
    },

    getFullNameV2: () => this.fullName,

    getFullNameV3: (function () {
        return this.fullName;
    })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());

console.log(obj.getFullNameV3());
/**
 * console.log(obj.getFullNameV3);
 */

/**
 * Inside Prop - fullName
 * Sandeep Pal
 * undefined
 * TypeError: obj.getFullNameV3 is not a function
 */