"use strict";
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
var cutZero = function (str) {
    if (str.charAt(0) === '0') {
        return str.slice(0);
    }
    else {
        return str;
    }
};
var removeDash = function (str) {
    var res = str.replace(/-/g, '');
    return Number(res);
};
function callBackTest(str, func, func2) {
    func2(func(str));
}
callBackTest('010-1111-2222', cutZero, removeDash);
