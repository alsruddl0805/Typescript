"use strict";
function animal(who) {
    if ('swim' in who) {
        console.log('this is Fish');
    }
    else {
        console.log('this is Bird');
    }
}
var date = new Date();
if (date instanceof Date) {
    console.log('부모 클래스가 Date');
}
function 함수(x) {
    if (x.wheel === '4개') {
        console.log('이 차는 ' + x.color);
    }
    else {
        console.log('이 바이크는 ' + x.color);
    }
}
