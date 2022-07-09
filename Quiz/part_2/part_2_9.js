"use strict";
var Cars = (function () {
    function Cars(a) {
        this.price = 1000;
        this.model = a;
    }
    return Cars;
}());
var myCar = new Cars('morning');
