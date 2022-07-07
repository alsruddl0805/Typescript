// Part 2 _ 8 : array 자료에 붙일 수 있는 tuple type

let dog :[string, boolean];
dog = ['dog', true];

// ? option 기호는 뒤에만 붙일 수 있음
function tupleArray(...x :[string, number, string?]) :void {
    console.log(x);
}
tupleArray('강아지', 32, '고양이');


// Q1. 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
let food :[string, number, boolean] = ['마라탕', 18000, true];

// Q2. let arr = ['동서녹차', 4000, true, false, true, true, false, true] => 타입 지정
let arr4 :[string, boolean, ...boolean[]];

// Q3. 함수 타입지정을 해보십시오.
function tupleArray2(...x :[string, boolean, ... (string | number)[]]) :void {
    console.log(x);
}
tupleArray2('Test', false, 'string', 12, 'string2', 34);

/*
Q4. 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
*/
function checkArray(...x :[(string | number)[]]) {
    let reArr :[string[], number[]] = [[], []];

    x.forEach((i) => {
        if (typeof i === 'string') {
            reArr[0].push(i);
        } else if (typeof i === 'number') {
            reArr[1].push(i);
        }
    });

    return reArr;
}