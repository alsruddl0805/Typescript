"use strict";
var dog;
dog = ['dog', true];
function tupleArray() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
tupleArray('강아지', 32, '고양이');
var food = ['마라탕', 18000, true];
var arr4;
function tupleArray2() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
tupleArray2('Test', false, 'string', 12, 'string2', 34);
function checkArray() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var reArr = [[], []];
    x.forEach(function (i) {
        if (typeof i === 'string') {
            reArr[0].push(i);
        }
        else if (typeof i === 'number') {
            reArr[1].push(i);
        }
    });
    return reArr;
}
