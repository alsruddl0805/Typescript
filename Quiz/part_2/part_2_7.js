"use strict";
function arrayFunction(x) {
    return x[0];
}
var a = arrayFunction([4, 2]);
console.log(a);
function checkGeneric(x) {
    return x[0];
}
var b = checkGeneric([4, 2]);
var c = checkGeneric(['kim', 'park']);
function generic1(x) {
    console.log(x.length);
}
generic1('hello');
generic1(['kim', 'park']);
var data = '{"name" : "dog", "age" : 1 }';
function animalObj(obj) {
    return JSON.parse(obj);
}
animalObj(data);
var Person2 = (function () {
    function Person2(a) {
        this.name = a;
    }
    return Person2;
}());
var a2 = new Person2('어쩌구');
