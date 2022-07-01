// Part 1 _ 14 : Object에 타입지정하려면 interface (2가지)

/*
type vs interface

type : 중복 선언 불가능
interface : 중복 선언 가능 (속성이 쌓임 / 자동 extends가 됨)
*/


// 1. type 키워드 사용
type squareType = {color: string, width: number};

// 2. interface 사용 (class 문법과 유사함)
interface squareType2 {
    color: string; // 세미콜론과 콤마 둘다 가능
    width: number,
}

let square :squareType = {color: '빨간색', width: 500};
let square2 :squareType = {color: '파란색', width: 800};

interface Student {
    name: string,
}
interface Teacher {
    name: string,
    age: number,
}

let student :Student = {name: '학생'};
let teacher :Teacher = {name: '선생', age: 25};

// interface의 장점 = extends로 복사 가능
interface Teacher extends Student {
    age: number,
}

/*
& (intersection type 교차) extends가 기호와 다른점 ?

&
1 ) 교차된 양쪽 타입 둘다 만족해야 함
2 ) 같은 속성이 중복되어도 당장 에러는 나지 않지만, 추후 타입 사용 시 never 타입 발생.
   => 양쪽 둘다 만족해야하는 기호기 때문에 string & number 등 말이 안되는 타입을 체크하게 됨. 따라서 사용 불가
   => 미리 에러가 나지 않기 떄문에 주의해야 함

extends 
1 ) 복사해달라는 뜻 ? ....
2 ) 같은 속성이 중복 될 경우 바로 에러 발생
*/ 
type AnimalType = {name: string};
type Cat = AnimalType & {age : number};


// =======================================

/*
Q1. let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
    interface 키워드로 타입지정
*/

interface Product {
    brand: string,
    serialNumber: number,
    model: string[],
}

let 상품 :Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
console.log(상품);

/*
Q2. array 안에 object 여러개가 필요
let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
*/

interface Cart {
    product: string,
    price: number,
}

let cartArray :Cart[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ];
console.log(cartArray);

/*
Q3. 위에서 만든 타입을 extends 해봅시다.
{ product : '청소기', price : 7000, card : false }
*/
interface NewCart extends Cart {
    card: boolean,
}

/*
Q4. object 안에 함수를 2개 넣고 싶은데요 
1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
이 object 자료를 어떻게 만들면 될까요? 
*/

// type CalcType = (a :number, b :number) => number;

// let plus :CalcType = function (a, b) {
//     return a+b;
// }
// let minus :CalcType = function (a, b) {
//     return a-b;
// }

// class Calc {
//     plus;
//     minus;
//     constructor(a :number, b :number) {
//         this.plus = plus(a,b);
//         this.minus = minus(a,b);
//     }
// }

// let testCalc = new Calc(3,5);
// console.log('된건가 ',testCalc);

interface CalcObj {
    plus: (a :number, b :number) => number;
    minus: (a :number, b :number) => number;
}

let calc :CalcObj = {
    plus(a, b) {
        return a+b;
    },
    minus(a, b) {
        return a-b;
    }
}

console.log('답 : ', calc);