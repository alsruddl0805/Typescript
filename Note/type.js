"use strict";
var testName = 'kim';
var testObject = { name2: 123 };
var testUnion = 123;
var testName2 = 'kwon';
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
