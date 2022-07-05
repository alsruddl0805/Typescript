"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User3 = (function () {
    function User3() {
        this.x = 10;
    }
    return User3;
}());
var NewUser = (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.y = 20;
        return _this;
    }
    return NewUser;
}(User3));
var newUser = new NewUser();
console.log('extends ?', newUser);
var User4 = (function () {
    function User4() {
        this.y = 20;
    }
    User4.x = 10;
    return User4;
}());
var user4 = new User4();
console.log(user4.y);
var User5 = (function () {
    function User5() {
        this.z = 30;
    }
    User5.y = 20;
    return User5;
}());
var Square = (function () {
    function Square(w, h, c) {
        this.width = w;
        this.height = h;
        this.color = c;
    }
    Square.prototype.draw = function () {
        var box = document.querySelector('.wrap');
        if (box instanceof Element) {
            var redBox = document.createElement('div');
            redBox.style.width = this.width + 'px';
            redBox.style.height = this.height + 'px';
            redBox.style.backgroundColor = this.color;
            box.append(redBox);
        }
    };
    return Square;
}());
var createSquare = new Square(30, 30, 'red');
createSquare.draw();
createSquare.draw();
createSquare.draw();
createSquare.draw();
createSquare.draw();
