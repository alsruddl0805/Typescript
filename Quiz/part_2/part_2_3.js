"use strict";
function neverType() {
    throw new Error();
    while (true) {
    }
}
function checkNever(params) {
    if (typeof params === 'string') {
        console.log(params);
    }
    else {
        console.log(params);
    }
}
var checkNever2 = function () {
    throw new Error();
};
