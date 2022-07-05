"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myName = 'kim';
var myFunction = function (a) { return a + 10; };
console.log(myName, myFunction);
var MyNamespace;
(function (MyNamespace) {
    ;
})(MyNamespace || (MyNamespace = {}));
var myName2 = '민수';
var myAge = { age: 10 };
console.log(myName2, myAge);
var car2 = { wheel: 4, model: 'audi' };
var bike = { wheel: 2, model: 'mart' };
console.log(car2, bike);
var obj = function (a) {
    console.log(a);
};
obj({ name: '나' });
