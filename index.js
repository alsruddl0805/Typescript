var testName = 'kim';
var testObject = { name2: 123 }; // ? -> 옵션
var testUnion = 123;
var testName2 = 'kwon';
/*
함수에 타입 지정 가능
파라미터 / return값 둘다 number
*/
function checkType(x) {
    return x * 2;
}
checkType(123);
var john = [123, true];
var mike = { name: 'kim' };
// class 타입 지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
