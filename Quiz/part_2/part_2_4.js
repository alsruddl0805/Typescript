"use strict";
var User2 = (function () {
    function User2(a) {
        this.name = 'kim';
        this.name2 = 'kim2';
        this.name = a;
    }
    User2.prototype.modifyName = function (newName) {
        this.name2 = newName;
    };
    return User2;
}());
var nameTest = new User2('aaaa');
nameTest.modifyName('바꿔졌나용');
