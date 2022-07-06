"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 3;
var age2 = 1;
console.log(age, age2);
function setNarrrow(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else if (typeof x === 'string') {
        return x + 1;
    }
    else {
        return 0;
    }
}
setNarrrow(3);
function setAssert(x) {
    return x + 1;
}
setAssert('3');
