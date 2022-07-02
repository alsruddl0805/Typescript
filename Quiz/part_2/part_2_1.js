"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function rest() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
rest(1, 2, 3, 4, 5, 6);
var arr = [1, 2];
var arr2 = [4, 5, 6];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
var _a = ['안녕', 123], str = _a[0], num = _a[1];
console.log(str, num);
var _b = { isStudent: true, ageNum: 18 }, isStudent = _b.isStudent, ageNum = _b.ageNum;
console.log(isStudent, ageNum);
var desObject = { isStudent: true, ageNum: 12 };
function isDestructuring(_a) {
    var isStudent = _a.isStudent, ageNum = _a.ageNum;
    console.log(isStudent, ageNum);
}
isDestructuring(desObject);
function maxNum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var max = num.sort(function (a, b) { return b - a; })[0];
    return max;
}
maxNum(1, 3, 6, 10, 2, 8);
var object = { user: 'kwon', comment: [5, 2, 3], admin: false };
function objectTest(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
objectTest(object);
function member3(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
member3([42, 'wine', true]);
