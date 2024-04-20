const tom = {
    name: 'Tom Curuz',
    getName: function () {
        console.log(this.name);
    },
};

const jhon = {
    name: 'Jhon Doe',
    getName: function () {
        console.log(this.name);
    },
};

jhon.getName.call(tom);

/**
 * Tom Curuz
 */