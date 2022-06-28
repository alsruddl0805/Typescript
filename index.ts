let testName :string = 'kim';
let testObject :{name?: string, name2: number} = {name2: 123}; // ? -> 옵션
let testUnion :string | number = 123;

// 타입은 변수에 담아서 사용 가능
type isUnion = string | number;
let testName2 :isUnion = 'kwon';

/*
함수에 타입 지정 가능
파라미터 / return값 둘다 number
*/ 
function checkType(x :number) :number {
    return x*2;
}
checkType(123);

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john:Member = [123, true]; 

/*
Object에 타입 지정해야할 속성이 너무 많을때,
ex ) 글자로 된 모든 Object 속성의 타입은 :string
*/
type Member2 = {
    [key :string] : string,
}
let mike:Member2 = {name : 'kim'};

// class 타입 지정 가능
class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}