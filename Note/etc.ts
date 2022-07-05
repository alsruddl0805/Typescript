// Part 1 _ 4 : Typescript의 엄격함에 대하여

let age :string|number;
let age2 :unknown = 1;

/* 
age + 1; -> 에러가 나는 이유

string + 1 (가능)
number + 1 (가능)
string|number + 1 (불가능)

--- 

age2 - 1;

변수가 1 값을 가지고 있음에도 에러가 나는 이유
=> 값은 1을 갖고 있지만 타입은 숫자타입이 아니기 때문에
*/


// Part 1 _ 6 : 타입 확정하기 Narrowing & Assertion
/*
1 ) Narrow : if 문 등으로 타입을 하나로 확정지어 주는 것.
- if 문에서는 else 를 써주지 않으면 에러가 나는데, tsconfig.json에 "noImplicitReturns": false 를 추가하여 에러를 방지할 수 있다.
- typeof 제외 타입 확정지을 수 있는 코드라면 무엇이든 Narrow 역할이 가능하다.
*/
function setNarrrow(x : number | string) {
    // X : return x + 1;

    // O
    if (typeof x === 'number') {
        return x + 1;
    } else if (typeof x === 'string') {
        return x + 1;
    } else {
        return 0;
    }
}

/* 
2 ) Type Assertion : 변수명 as type
 ex 변수명 as number => 나는 해당 변수를 number라고 주장하겠다 (타입실드)
 setAssert('123') 이렇게 문자열에 숫자를 넣어서 실행해도 '1231'로 출력이된다.
 number 타입이라고 주장하여 결과를 실행시켰지만 실제로 number 타입인건 아니기 때문

 문법 사용 용도
 1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
 2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
*/
function setAssert(x : number | string) {
    return (x as number) + 1;
}

// export / import 변수/함수 테스트
export type Car2 = {
    wheel : number,
    model : string
  }

export interface Bike {
    wheel : 2,
    model : string
}

export type ObjFunction = (obj :{name :string}) => void;