// 기본 타입
let testName :string = 'kim';
let testObject :{name?: string, name2: number} = {name2: 123}; // ? -> 옵션
let testUnion :string | number = 123; // union

// 타입 지정 (변수에 담아 쓰기)
type isUnion = string | number;
let testName2 :isUnion = 'kwon';

type animal = {name: string, age: number};
let animalInfo :animal = {name: '강아지', age: 2};

type girlfriend = {
    readonly name : string
};
const newfriend :girlfriend = {
    name : '유라'
}
// newfriend.name = '수지'; -> readonly 지정을 해놨기 때문에 수정은 불가함

// 타입을 미리 지정하기 애매할 때 any, unknown
/* any : 타입실드 해제문법 (일반 JS 변수로 만듦) */
let anyName :any;
anyName = 123;
anyName = 'test';

// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john:Member = [123, true]; 

/*
함수 타입 (파라미터, return 값 지정 가능)
- 파라미터에 타입을 지정하면, 필수 파라미터가 된다.
- 변수?:number = 변수:number|undefined (? 옵션)
*/
function checkType(x :number) :number { // :void 타입 활용 가능 (return이 없는 경우)
    return x*2;
}
checkType(123);

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