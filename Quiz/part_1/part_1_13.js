"use strict";
var Person = (function () {
    function Person(num) {
        this.data = num;
    }
    Person.prototype.myFunction = function (a) {
        console.log('안뇽 ' + a);
    };
    return Person;
}());
var person1 = new Person(1);
var person2 = new Person(2);
person1.myFunction('김씨');
var Car = (function () {
    function Car(str, num) {
        this.model = str;
        this.price = num;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1, car1.tax());
var Word = (function () {
    function Word() {
        var any = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            any[_i] = arguments[_i];
        }
        var strArray = [];
        var numArray = [];
        any.forEach(function (i) {
            if (typeof i === 'string') {
                strArray.push(i);
            }
            else {
                numArray.push(i);
            }
        });
        this.string = strArray;
        this.num = numArray;
    }
    return Word;
}());
var word1 = new Word(1, '가', 2, '나', 3);
console.log(word1);
