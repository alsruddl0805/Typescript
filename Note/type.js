"use strict";
var testName = 'kim';
var testObject = { name2: 123 };
var testUnion = 123;
var testName2 = 'kwon';
var animalInfo = { name: '강아지', age: 2 };
var newfriend = {
    name: '유라'
};
var testFunction = function () {
    return 10;
};
var tom;
var anyName;
anyName = 123;
anyName = 'test';
var john = [123, true];
function checkType(x) {
    return x * 2;
}
checkType(123);
var mike = { name: 'kim' };
var User = (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
