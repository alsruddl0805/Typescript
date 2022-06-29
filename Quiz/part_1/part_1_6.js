"use strict";
function setNumberArray(list) {
    var newArray = [];
    list.forEach(function (i) {
        if (typeof i === 'number') {
            newArray.push(i);
        }
        else {
            newArray.push(Number(i));
        }
    });
    return newArray;
}
setNumberArray([1, 2, '3', '4']);
function checkSubject(obj) {
    var subject = '';
    if (Array.isArray(obj.subject)) {
        subject = obj.subject[obj.subject.length - 1];
    }
    else if (typeof obj.subject === 'string') {
        subject = obj.subject;
    }
    else {
        subject = '';
    }
    return subject;
}
checkSubject({ subject: 'math' });
checkSubject({ subject: ['science', 'art', 'korean'] });
