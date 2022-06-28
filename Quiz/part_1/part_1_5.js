"use strict";
function nameReturn(name) {
    if (name) {
        console.log('안녕하세요 홍길동');
    }
    else {
        console.log('이름이 없습니다.');
    }
}
nameReturn('홍길동');
function checkLength(num) {
    return num.toString().length;
}
checkLength(123);
function checkMarried(pay, isHouse, charm) {
    var houseScore = isHouse ? 500 : 0;
    var charmScore = charm === '상' ? 100 : 0;
    var totalScore = pay + houseScore + charmScore;
    if (totalScore > 600) {
        return '결혼 가능';
    }
}
checkMarried(700, false, '상');
